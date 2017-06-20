import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StartAnimationComponent } from './main/start-animation/start-animation.component';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './offer/offer.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeCreateComponent } from './offer/we-create/we-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartAnimationComponent,
    HeaderComponent,
    OfferComponent,
    PageNotFoundComponent,
    WeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
