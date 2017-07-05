import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./button/button.component";
import {SquareImageComponent} from "./squareImage/square-image.component";
import {CloseComponent} from "./close/close.component";

@NgModule({
    declarations: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent,
        CloseComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent,
        CloseComponent
    ],
    providers: [],
})
export class UiModule {
}
