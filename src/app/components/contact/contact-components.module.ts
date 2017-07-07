import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {SharedModule} from "../../shared.module";

@NgModule({
    declarations: [
        ContactInfoComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        ContactInfoComponent,
    ],
    providers: [],
})
export class ContactComponentModule {
}
