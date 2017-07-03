import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from "./contact-info/contact-info.component";
import {UiModule} from "../../shared/ui-elements/ui.module";

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
