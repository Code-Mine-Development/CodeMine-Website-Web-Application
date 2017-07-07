import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {SquareImageComponent} from './squareImage/square-image.component';
import {TranslateModule} from '@ngx-translate/core';

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
        TranslateModule
    ],
    providers: [],
})
export class UiModule {
}
