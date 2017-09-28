import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {HorizontalComponent} from './home-information/horizontal/horizontal.component';
import {ScrollController} from './services/scroll.controller';
import {MouseWheelDirective} from './directive/mouseWheel.directive';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeInformationContentComponent} from './home-information/home-information-content/home-information-content.component';


@NgModule({
  declarations: [
    HomeInformationComponent,
    HorizontalComponent,
    MouseWheelDirective,
    HomeInformationContentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule
  ],
  providers: [
    ScrollController
  ],
  exports: [
    HomeInformationComponent
  ],
})
export class HomePageComponentModule {
}
