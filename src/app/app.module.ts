import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {StartAnimationComponent} from './main/start-animation/start-animation.component';
import {OfferComponent} from './offer/offer.component';
import {CoreModule} from "./core/core-module";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        StartAnimationComponent,
        OfferComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
