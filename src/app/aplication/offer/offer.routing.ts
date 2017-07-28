import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';

import {OfferResolver} from './services/offer.resolver';
import {ToolsResolver} from './services/tools.resolver';
import {TechnologiesResolver} from './services/technologies.resolver';

import {OfferComponent} from './offer.component';


const offerRoutes: Routes = [
  { path: 'offer', component: OfferComponent, resolve: {
    offer: OfferResolver,
    tools: ToolsResolver,
    technologies: TechnologiesResolver
  }}
];


@NgModule({
  imports: [
    LocalizeRouterModule.forChild(offerRoutes),
    RouterModule.forChild(offerRoutes)
  ],
  exports: [RouterModule]
})
export class OfferRoutingModule {

}

