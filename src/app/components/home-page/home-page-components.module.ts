import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { BgTrianglesComponent } from './home-information/bg-triangles/bg-triangles.component';
import { TriangleComponent } from './home-information/bg-triangles/triangle/triangle.component';
import { HorizontalComponent } from './home-information/horizontal/horizontal.component';
import { HomeInformationContentComponent } from './home-information/home-information-content/home-information-content.component';
import { InformationComponent } from './home-information/home-information-content/information/information.component';
import { ScrollControllerService } from './services/scroll-controller.service'

@NgModule({
    declarations: [
      HomeInformationComponent,
      BgTrianglesComponent,
      TriangleComponent,
      HorizontalComponent,
      HomeInformationContentComponent,
      InformationComponent,

    ],
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule
    ],
    providers:[
      ScrollControllerService
    ],
    exports: [
      HomeInformationComponent
    ],
})
export class HomePageComponentModule {
}
