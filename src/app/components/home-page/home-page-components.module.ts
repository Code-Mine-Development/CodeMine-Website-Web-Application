import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeInformationComponent} from './home-information/home-information.component';
import {ActivatedRoute} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [
      HomeInformationComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
      HomeInformationComponent,
      TranslateModule
    ],
    providers: [],
})
export class HomePageComponentModule {
}
