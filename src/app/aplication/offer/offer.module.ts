import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchitectureComponent} from './architecture/architecture.component';
import {OfferService} from './offer.service';
import {OfferComponent} from './offer.component';
import {WeCreateDetailsComponent} from './weCreate/weCreateDetails/weCreateDetails.component';
import {OfferRoutingModule} from './offer.routing';
import {LanguagesDetailsComponent} from './languages/languages-details/languages-details.component';
import {TechnologiesDetailsComponent} from './technologies/technologies-details/technologies-details.component';
import {OfferResolver} from './offer.resolver';
import {HttpModule} from '@angular/http';
import {WeCreateComponent} from './weCreate/weCreate.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {LanguagesComponent} from './languages/languages.component';


@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    HttpModule
  ],
  declarations: [
    ArchitectureComponent,
    OfferComponent,
    WeCreateDetailsComponent,
    LanguagesDetailsComponent,
    TechnologiesDetailsComponent,
    WeCreateComponent,
    TechnologiesComponent,
    LanguagesComponent

  ],
  providers: [OfferService, OfferResolver],
})
export class OfferModule {
}
