import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from '@ngx-translate/core';
import { CompanyInformationsComponent } from './company-informations/company-informations.component';

@NgModule({
    declarations: [
        ContactInfoComponent,
        CompanyInformationsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule
    ],
    exports: [
        ContactInfoComponent,
        CompanyInformationsComponent
    ],
    providers: [],
})
export class ContactComponentModule {
}
