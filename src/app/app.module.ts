import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http, HttpModule} from '@angular/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateStore} from '@ngx-translate/core/src/translate.store';
import {LocalizeRouterService} from 'localize-router';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core-module';
import {OfferModule} from './aplication/offer/offer.module';
import {AuditModule} from './aplication/audit/audit.module';
import {PortfolioModule} from './aplication/portfolio/portfolio.module';
import {WeCreateModule} from './aplication/we-create/we-create.module';
import {TechnologiesModule} from './aplication/offerElementsDetails/offerElements.module';

import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {ContactService} from './aplication/contact/services/contact.service';
import {PortfolioService} from './aplication/portfolio/services/portfolio.service';
import {PortfolioResolver} from './aplication/portfolio/services/portfolio.resolver';
import {HomePageResolver} from './aplication/home-page/services/home-page.resolver';
import {OfferResolver} from './aplication/offer/services/offer.resolver';
import {HomeInformationServices} from './components/home-page/services/home-information.service';
import {HomeInformationResolver} from './components/home-page/services/home-information.resolver';
import {AuditResolver} from './aplication/audit/services/audit.resolver';
import {PreviousPositionService} from './shared/services/previous-position.service'

import {AppComponent} from './app.component';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    CommonModule,
    HttpModule,
    CoreModule,
    PortfolioModule,
    OfferModule,
    AuditModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WeCreateModule,
    TechnologiesModule
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
    TranslateStore,
    LocalizeRouterService,
    Title,
    PreviousPositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
