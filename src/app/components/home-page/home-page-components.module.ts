import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { BgTrianglesComponent } from './home-information/bg-triangles/bg-triangles.component';
import { TriangleComponent } from './home-information/bg-triangles/triangle/triangle.component';
import { HorizontalComponent } from './home-information/horizontal/horizontal.component';
import { HomeInformationContentComponent } from './home-information/home-information-content/home-information-content.component';
import { ScrollController } from './services/scroll.controller'
import { MouseWheelDirective } from './directive/mouseWheel.directive';
import { SloganSectionComponent } from './home-information/home-information-content/slogan-section/slogan-section.component';
import { CtaToFormComponent } from './home-information/home-information-content/cta-to-form/cta-to-form.component';
import { FirstGroupComponent } from './home-information/home-information-content/first-group/first-group.component';
import { HowWeWorkComponent } from './home-information/home-information-content/first-group/components/how-we-work.component';
import { KnowledgeComponent } from './home-information/home-information-content/first-group/components/knowledge/knowledge.component';
import { LanguageComponent } from './home-information/home-information-content/first-group/components/language/language.component';
import { SpecificationComponent } from './home-information/home-information-content/specification/specification.component';
import { UiUxComponent } from './home-information/home-information-content/ui-ux/ui-ux.component';
import { LogicComponent } from './home-information/home-information-content/logic/logic.component';
import { ImplementationComponent } from './home-information/home-information-content/implementation/implementation.component';
import { SecondImplementationComponent } from './home-information/home-information-content/second-implementation/second-implementation.component';
import { SupportComponent } from './home-information/home-information-content/support/support.component';

@NgModule({
    declarations: [
      HomeInformationComponent,
      BgTrianglesComponent,
      TriangleComponent,
      HorizontalComponent,
      HomeInformationContentComponent,
      MouseWheelDirective,
      SloganSectionComponent,
      CtaToFormComponent,
      FirstGroupComponent,
      HowWeWorkComponent,
      KnowledgeComponent,
      LanguageComponent,
      SpecificationComponent,
      UiUxComponent,
      LogicComponent,
      ImplementationComponent,
      SecondImplementationComponent,
      SupportComponent
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
