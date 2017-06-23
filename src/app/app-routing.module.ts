import {NgModule} from "@angular/core";
import {RouterModule, Routes, PreloadAllModules} from "@angular/router";
import {OfferComponent} from "./offer/offer.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'offer', component:OfferComponent},
  { path: 'aboutUs', loadChildren: './about-us/about-us.module#AboutUsModule'},

  { path: 'not-found', component:PageNotFoundComponent},
  { path:'**',redirectTo:'/not-found'},

];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
