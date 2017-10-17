import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './aplication/home-page/home-page.component';
import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {HomePageResolver} from './aplication/home-page/services/home-page.resolver';
import {HomeInformationResolver} from './components/home-page/services/home-information.resolver';
import {LocalizeRouterModule} from 'localize-router';


export const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: HomePageComponent,
    resolve: {
      company: ContactResolver,
      carousel: HomePageResolver,
      homeInformation: HomeInformationResolver
    }
  },
  {path: 'contact', loadChildren: './aplication/contact/contact.module#ContactModule'},
  {path: 'portfolio', loadChildren: './aplication/portfolio/portfolio.module#PortfolioModule'},
  {path: 'offer', loadChildren: './aplication/offer/offer.module#OfferModule'},
  {path: 'audit', loadChildren: './aplication/audit/audit.module#AuditModule'},
  {path: 'aboutus', loadChildren: './aplication/about-us/about-us.module#AboutUsModule'},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    LocalizeRouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {

}
