import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        PageNotFoundComponent,
        FooterComponent
    ],
    imports: [
        AppRoutingModule,
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers:[]
})
export class CoreModule {
}