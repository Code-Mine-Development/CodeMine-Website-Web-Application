import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {SharedModule} from "../../shared.module";
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        ContactInfoComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule
    ],
    exports: [
        ContactInfoComponent,
    ],
    providers: [],
})
export class ContactComponentModule {
}
