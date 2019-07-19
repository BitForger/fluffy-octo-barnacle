import {NgModule}                     from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink}     from 'apollo-angular-link-http';
import {InMemoryCache}                from 'apollo-cache-inmemory';
import { ApolloLink }                 from 'apollo-link';
import { environment }                from '../environments/environment';

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`
      }
    });
    return forward(operation);
  });
  const http = httpLink.create({uri});
  return {
    link: authLink.concat(http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
