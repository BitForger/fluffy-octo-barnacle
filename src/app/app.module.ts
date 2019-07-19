import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { AppComponent }            from './app.component';
import { HeaderComponent }         from './components/header/header.component';
import { BrowserAnimationsModule }     from '@angular/platform-browser/animations';
import { RoutingModule }               from './routing/routing.module';
import { MainComponent }               from './components/main/main.component';
import { HomeComponent }               from './components/routes/home/home.component';
import { AboutComponent }              from './components/routes/about/about.component';
import { MaterialModule }              from './material.module';
import { MatSidenavModule }            from '@angular/material';
import { CookieModule, CookieService } from 'ngx-cookie';
import { ProjectsComponent } from './components/routes/projects/projects.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    MatSidenavModule,
    CookieModule.forRoot(),
    GraphQLModule,
    HttpClientModule,
  ],
  providers   : [
    Title,
  ],
  bootstrap   : [ AppComponent ],
})
export class AppModule {
}
