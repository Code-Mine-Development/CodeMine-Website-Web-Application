import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

import { OfferElementsService } from './services/technologies.service';
import { OfferElementsRoutingModule } from './technologies.routing';
import { OfferElementsComponent } from './technologies.component';
import { OfferElementComponent } from './technology/technology.component'

@NgModule({
  imports: [
    CommonModule,
    OfferElementsRoutingModule,
    RouterModule,
    HttpModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  providers:[
    OfferElementsService,
  ],
  declarations: [
    OfferElementsComponent,
    OfferElementComponent
  ]
})
export class TechnologiesModule { }
