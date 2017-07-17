import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
      HomeInformationComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
      HomeInformationComponent,
      SharedModule
    ],
    providers: [],
})
export class HomePageComponentModule {
}
