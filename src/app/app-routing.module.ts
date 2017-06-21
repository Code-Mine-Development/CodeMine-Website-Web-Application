import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {OfferComponent} from "./offer/offer.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:MainComponent},
  { path: 'offer', component:OfferComponent},
  { path: 'portfolio', component:PortfolioComponent},
  { path: 'not-found', component:PageNotFoundComponent},
  { path:'**',redirectTo:'/not-found'},

];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
