import { AfterViewChecked, ChangeDetectorRef, Component, Input } from '@angular/core';
import { HomeService }                                           from './services/home/home.service';
import { Event, NavigationEnd, Router }                          from '@angular/router';
import { CookieService }                                         from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss'],
  providers: [HomeService]
})
export class AppComponent implements AfterViewChecked {
  title = 'Polar Bear Digital';

  @Input()
  public shouldHeaderBeVisible = false;

  public loading = false;

  public hideToolbar = true;

  public invert = false;

  public homeActive = false;

  constructor(private homeService: HomeService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef,
              private cs: CookieService) {

    const splashWasViewed = this.cs.get('splashComplete') as unknown as boolean;
    this.router.events.subscribe((evt: Event) => {
      if ( evt instanceof NavigationEnd) {
        this.invert = (evt.url !== '/');
        this.hideToolbar = (evt.url === '/' && !splashWasViewed);
        this.homeActive = (evt.url === '/');
      }
    });
  }

  ngAfterViewChecked(): void {
    this.invert = (this.router.url !== '/');
    this.changeDetectorRef.detectChanges();
  }
}
