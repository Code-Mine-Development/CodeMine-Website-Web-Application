import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {ActivatedRoute} from '@angular/router';


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
