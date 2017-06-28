import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from "./contact-info/contact-info.component";

@NgModule({
    declarations: [
        ContactInfoComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ContactInfoComponent,
    ],
    providers: [],
})
export class ContactComponentModule {
}
