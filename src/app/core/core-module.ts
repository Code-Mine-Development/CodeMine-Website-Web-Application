import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "../app-routing.module";
import {FooterComponent} from "./footer/footer.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CommonModule} from "@angular/common";
import {UiModule} from "../ui-elements/ui.module";
import {HomeInformationComponent} from "./home-page/home-information/home-information.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        HomeInformationComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        UiModule,
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