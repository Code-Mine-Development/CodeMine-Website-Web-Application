import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        ContactInfoComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        ContactInfoComponent,
    ],
    providers: [],
})
export class ContactComponentModule {
}
