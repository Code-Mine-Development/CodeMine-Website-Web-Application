import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact.routing';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {ContactComponentModule} from '../../components/contact/contact-components.module';
import {SharedModule} from "../../shared.module";
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        UiModule,
        ContactComponentModule,
        TranslateModule
    ],
    exports: [],
    providers: []
})
export class ContactModule {
}
