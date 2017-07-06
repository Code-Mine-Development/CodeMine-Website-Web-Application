import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core/core-module';
import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {ContactService} from './aplication/contact/services/contact.service';
import {PortfolioService} from './aplication/portfolio/services/portfolio.service';
import {PortfolioResolver} from './aplication/portfolio/services/portfolio.resolver';
import {PortfolioModule} from './aplication/portfolio/portfolio.module';
import {HomePageResolver} from './core/home-page/services/home-page.resolver';
import {OfferModule} from './aplication/offer/offer.module';
import {OfferResolver} from './aplication/offer/offer.resolver';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeInformationServices} from './components/home-page/services/home-information.service';
import {HomeInformationResolver} from './components/home-page/services/home-information.resolver';
import {AuditModule} from './aplication/audit/audit.module';
import {AuditResolver} from './aplication/audit/services/audit.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    CoreModule,
    PortfolioModule,
    OfferModule,
    AuditModule,
    PortfolioModule,
    BrowserAnimationsModule
  ],
  providers: [
    PortfolioService,
    HomePageResolver,
    ContactResolver,
    ContactService,
    PortfolioResolver,
    OfferResolver,
    AuditResolver,
    PortfolioResolver,
    HomeInformationServices,
    HomeInformationResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
