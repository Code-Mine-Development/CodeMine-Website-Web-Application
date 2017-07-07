import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './core/home-page/home-page.component';
import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {HomePageResolver} from './core/home-page/services/home-page.resolver';
import {HomeInformationResolver} from './components/home-page/services/home-information.resolver';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: HomePageComponent,
    resolve: {
      company: ContactResolver,
      carousel: HomePageResolver,
      homeInformation: HomeInformationResolver
    }
  },
  {path: 'kontakt', loadChildren: './aplication/contact/contact.module#ContactModule'},
  {path: 'portfolio', loadChildren: './aplication/portfolio/portfolio.module#PortfolioModule'},
  {path: 'oferta', loadChildren: './aplication/offer/offer.module#OfferModule'},
  {path: 'audyty', loadChildren: './aplication/audit/audit.module#AuditModule'},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
