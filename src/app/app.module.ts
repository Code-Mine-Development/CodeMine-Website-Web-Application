import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {OfferComponent} from './offer/offer.component';
import {AuditComponent} from './audit/audit.component';
import {QualityComponent} from './audit/quality/quality.component';
import {UsabilityComponent} from './audit/usability/usability.component';
import {CoreModule} from "./core/core-module";
import {HttpModule} from "@angular/http";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PortfolioService} from "./shared/service/portfolio.service";
import {HomePageResolver} from "./core/home-page/home-page.resolver";
import {UiModule} from "./ui-elements/ui.module";
import {ContactService} from "./contact/contact.service";
import {ContactResolver} from "./contact/contact.resolver";
import {CommonModule} from "@angular/common";
import {AuditService} from "./audit/audit.service";
import {AuditResolver} from "./audit/audit.resolver";

@NgModule({
    declarations: [
        AppComponent,
        OfferComponent,
        AuditComponent,
        QualityComponent,
        UsabilityComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        CoreModule,
        UiModule
    ],
    providers: [PortfolioService,HomePageResolver,ContactResolver,ContactService, AuditService, AuditResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
