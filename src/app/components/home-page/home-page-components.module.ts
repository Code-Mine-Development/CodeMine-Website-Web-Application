import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';


@NgModule({
    declarations: [
      HomeInformationComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
      HomeInformationComponent
    ],
    providers: [],
})
export class HomePageComponentModule {
}
