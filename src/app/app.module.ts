import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule }             from '@angular/core';

import { AppComponent }                      from './app.component';
import { HeaderComponent }                   from './components/header/header.component';
import { BrowserAnimationsModule }           from '@angular/platform-browser/animations';
import { RoutingModule }                     from './routing/routing.module';
import { MainComponent }                     from './components/main/main.component';
import { HomeComponent }                     from './components/routes/home/home.component';
import { AboutComponent }                    from './components/routes/about/about.component';
import { MaterialModule }                    from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
