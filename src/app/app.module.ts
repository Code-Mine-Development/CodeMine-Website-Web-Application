import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {StartAnimationComponent} from './home-page/start-animation/start-animation.component';
import {HeaderComponent} from './header/header.component';
import {OfferComponent} from './offer/offer.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
// import { ContactComponent } from './home-page/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import {ContactComponent} from './contact/contact.component';
import { AuditComponent } from './audit/audit.component';
import {QualityComponent} from './audit/quality/quality.component';
import { UsabilityComponent } from './audit/usability/usability.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StartAnimationComponent,
    HeaderComponent,
    OfferComponent,
    PageNotFoundComponent,
    // ContactComponent,
    FooterComponent,
    CarouselComponent,
    ContactComponent,
    AuditComponent,
    QualityComponent,
    UsabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
