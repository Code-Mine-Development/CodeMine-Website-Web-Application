import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ContactFormService} from './service/contact-form.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ContactInfoComponent,
        ContactFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule,
        FormsModule
    ],
    exports: [
        ContactInfoComponent,
        ContactFormComponent
    ],
    providers: [
        ContactFormService
    ],
})
export class ContactComponentModule {
}
