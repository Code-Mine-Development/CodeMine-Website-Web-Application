import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferComponent} from './offer.component';
import {OfferResolver} from './services/offer.resolver';
import { LocalizeRouterModule } from 'localize-router';


const offerRoutes: Routes = [
  { path: 'offer', component: OfferComponent, resolve: {offer: OfferResolver} }
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

