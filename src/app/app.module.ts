import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {StartAnimationComponent} from './main/start-animation/start-animation.component';
import {OfferComponent} from './offer/offer.component';
import {CoreModule} from "./core/core-module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        StartAnimationComponent,
        OfferComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
