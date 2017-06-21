import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        PageNotFoundComponent
    ],
    imports: [
        AppRoutingModule,
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[]
})
export class CoreModule {
}