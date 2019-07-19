import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService }                  from '../../../services/home/home.service';
import { Apollo }                       from 'apollo-angular';
import gql                              from 'graphql-tag';
import { IGithubUserResponse }          from '../../../interfaces/IGithubUser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public loading = true;

  public pinnedRepos;
  public repos;

  private query;

  public imageLangHash = {
    typescript: '/assets/images/typescript.png',
    rails: '/assets/images/rails-logo.png',
    ruby: '/assets/images/ruby-wallpaper.png',
    java: '/assets/images/java-logo.png',
    swift: '/assets/images/swift-logo.png',
    javascript: '/assets/images/js-logo.jpg',
    lua: '/assets/images/logo-lua.png',
    css: '/assets/images/css-logo.jpg',
    vue: '/assets/images/vue-logo.png',
    php: '/assets/images/php-logo.png',
  };

  constructor(private hs: HomeService, private apollo: Apollo) { this.hs.toggle(true); }

  ngOnInit() {
    this.query = this.apollo.watchQuery<IGithubUserResponse>({
      query: gql`
      query {
        user(login: "BitForger") {
          pinnedRepositories(first: 6) {
            nodes {
              id
              name
              primaryLanguage {
                name
              }
              url
              languages(first: 10) {
                nodes {
                  name
                }
              }
              description
            }
          }
          repositories(first: 16, orderBy: {direction: DESC, field: UPDATED_AT}, privacy: PUBLIC, isLocked: false) {
            nodes {
              id
              name
              primaryLanguage {
                name
              }
              url
              languages(first: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
      `
    }).valueChanges
      .subscribe(({data, loading}) => {
        this.loading = loading;
        console.log(data);
        const pinnedRepoIds = data.user.pinnedRepositories.nodes.map(repo => repo.id);
        const pinnedRepoLength = data.user.pinnedRepositories.nodes.length;
        const pinnedFirstHalf = data.user.pinnedRepositories.nodes.slice(0, pinnedRepoLength / 2);
        const pinnedLastHalf = data.user.pinnedRepositories.nodes.slice(pinnedRepoLength / 2);
        this.pinnedRepos = [
          pinnedFirstHalf,
          pinnedLastHalf,
        ];
        console.log('pinned repos', this.pinnedRepos);
        this.repos = data.user.repositories.nodes;
        this.repos = this.repos.filter(r => !pinnedRepoIds.includes(r.id));
      });
  }

  ngOnDestroy(): void {
    this.query.unsubscribe();
  }

  public getImage(language: string) {
    const l = language.toLowerCase();
    if ( l in this.imageLangHash ) {
      return this.imageLangHash[l];
    }
    return 'https://source.unsplash.com/random';
  }
}
