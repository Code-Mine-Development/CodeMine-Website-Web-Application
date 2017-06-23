import {NgModule} from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {CommonModule} from "@angular/common";
import {ContactInfoComponent} from "./contact-info/contact-info.component";

@NgModule({
    declarations: [
        CarouselComponent,
        ContactInfoComponent
    ],
    imports: [
        CommonModule,
    ],
    exports:[CarouselComponent,ContactInfoComponent],
    providers: [],
})
export class UiModule {
}
