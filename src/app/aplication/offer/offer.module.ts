import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArchitectureComponent} from './architecture/architecture.component';
import {OfferComponent} from './offer.component';
import {WeCreateDetailsComponent} from './weCreate/weCreateDetails/weCreateDetails.component';
import {OfferRoutingModule} from './offer.routing';
import {LanguagesDetailsComponent} from './languages/languages-details/languages-details.component';
import {TechnologiesDetailsComponent} from './technologies/technologies-details/technologies-details.component';
import {HttpModule} from '@angular/http';
import {WeCreateComponent} from './weCreate/weCreate.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {LanguagesComponent} from './languages/languages.component';
import {OfferService} from './services/offer.service';
import {OfferResolver} from './services/offer.resolver';
import {TranslateModule} from '@ngx-translate/core';


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
    LanguagesComponent,
  ],
  providers: [OfferService, OfferResolver],
})
export class OfferModule {
}
