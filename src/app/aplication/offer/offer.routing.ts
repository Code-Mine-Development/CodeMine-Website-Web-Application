import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferComponent} from './offer.component';
import {WeCreateDetailsComponent} from './weCreate/weCreateDetails/weCreateDetails.component';
import {LanguagesDetailsComponent} from './languages/languages-details/languages-details.component';
import {OfferResolver} from './offer.resolver';

const offerRoutes: Routes = [
  {path: '', component: OfferComponent, resolve: {offer: OfferResolver}},
  {path: 'weCreate/details', component: WeCreateDetailsComponent},
  {path: 'technologies/details', component: WeCreateDetailsComponent},
  {path: 'languages/details', component: LanguagesDetailsComponent},

];


@NgModule({
  imports: [
    RouterModule.forChild(offerRoutes)
  ],
  exports: [RouterModule]
})
export class OfferRoutingModule {

}
