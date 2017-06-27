import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        CarouselComponent,
        ContactInfoComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [CarouselComponent, ContactInfoComponent, ListComponent],
    providers: [],
})
export class UiModule {
}
