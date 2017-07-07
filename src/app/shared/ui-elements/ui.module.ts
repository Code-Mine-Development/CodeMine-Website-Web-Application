import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {SquareImageComponent} from './squareImage/square-image.component';
import {SharedModule} from "../../shared.module";

@NgModule({
    declarations: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent,
        SharedModule
    ],
    providers: [],
})
export class UiModule {
}
