import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from "../../shared.module";


@NgModule({
    declarations: [
      HomeInformationComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
      HomeInformationComponent,
      SharedModule
    ],
    providers: [],
})
export class HomePageComponentModule {
}
