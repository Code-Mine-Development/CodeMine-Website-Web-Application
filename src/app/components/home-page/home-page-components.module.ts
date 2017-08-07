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
import { ScrollController } from './services/scroll.controller'
import { MouseWheelDirective } from './directive/mouseWheel.directive';
import { SloganSectionComponent } from './home-information/home-information-content/slogan-section/slogan-section.component';
import { CtaToFormComponent } from './home-information/home-information-content/cta-to-form/cta-to-form.component';
import { FirstGroupComponent } from './home-information/home-information-content/first-group/first-group.component';
import { HowWeWorkComponent } from './home-information/home-information-content/first-group/components/how-we-work.component';

@NgModule({
    declarations: [
      HomeInformationComponent,
      BgTrianglesComponent,
      TriangleComponent,
      HorizontalComponent,
      HomeInformationContentComponent,
      InformationComponent,
      MouseWheelDirective,
      SloganSectionComponent,
      CtaToFormComponent,
      FirstGroupComponent,
      HowWeWorkComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule
    ],
    providers:[
      ScrollController
    ],
    exports: [
      HomeInformationComponent
    ],
})
export class HomePageComponentModule {
}
