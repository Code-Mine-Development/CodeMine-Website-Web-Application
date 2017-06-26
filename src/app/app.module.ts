import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {OfferComponent} from './offer/offer.component';
import {CoreModule} from "./core/core-module";
import {HttpModule} from "@angular/http";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PortfolioService} from "./shared/service/portfolio.service";
import {HomePageResolver} from "./core/home-page/home-page.resolver";
import {ContactService} from "./contact/contact.service";
import {ContactResolver} from "./contact/contact.resolver";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        OfferComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        CoreModule,
    ],
    providers: [PortfolioService,HomePageResolver,ContactResolver,ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
