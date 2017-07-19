import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { BgTrianglesComponent } from './home-information/bg-triangles/bg-triangles.component';



@NgModule({
    declarations: [
      HomeInformationComponent,
      BgTrianglesComponent,

    ],
    imports: [
        CommonModule,
        TranslateModule,
      SharedModule
    ],
    exports: [
      HomeInformationComponent,

    ],
    providers: [],
})
export class HomePageComponentModule {
}
