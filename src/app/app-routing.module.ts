import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {OfferComponent} from './offer/offer.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from "./contact/contact.component";
import {AuditComponent} from "./audit/audit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'offer', component: OfferComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'audit', component: AuditComponent},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
