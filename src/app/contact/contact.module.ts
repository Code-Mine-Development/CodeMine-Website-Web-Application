import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiModule} from '../ui-elements/ui.module';
import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact.routing';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        UiModule,
    ],
    exports: [],
    providers: []
})
export class ContactModule {
}
