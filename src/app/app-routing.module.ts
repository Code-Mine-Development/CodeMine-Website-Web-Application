import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {OfferComponent} from "./offer/offer.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:MainComponent},
  { path: 'offer', component:OfferComponent},
];


@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
