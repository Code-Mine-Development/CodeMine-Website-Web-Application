import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterModule} from 'localize-router';

import {OfferComponent} from './offer.component';
import {OfferRoutingModule} from './offer.routing';
import {OfferService} from './services/offer.service';
import {OfferResolver} from './services/offer.resolver';

import {ArchitectureComponent} from './architecture/architecture.component';
import {WeCreateComponent} from './weCreate/weCreate.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {ToolsComponent} from './tools/tools.component';
import {TechnologiesResolver} from './services/technologies.resolver';
import {ToolsResolver} from './services/tools.resolver';



@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    HttpModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  declarations: [
    ArchitectureComponent,
    OfferComponent,
    WeCreateComponent,
    TechnologiesComponent,
    ToolsComponent
  ],
  providers: [OfferService, OfferResolver, TechnologiesResolver, ToolsResolver],
})
export class OfferModule {
}
