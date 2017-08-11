import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

import { OfferElementsService } from './services/offerElements.service';
import { OfferElementsRoutingModule } from './offerElements.routing';
import { OfferElementsComponent } from './offerElements.component';
import { OfferElementComponent } from './offerElement/offerelement.component'

@NgModule({
  imports: [
    CommonModule,
    OfferElementsRoutingModule,
    RouterModule,
    HttpModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  providers: [
    OfferElementsService,
  ],
  declarations: [
    OfferElementsComponent,
    OfferElementComponent
  ]
})
export class TechnologiesModule { }
