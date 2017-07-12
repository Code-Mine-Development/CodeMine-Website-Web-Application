import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {SquareImageComponent} from './squareImage/square-image.component';
import {SharedModule} from "../../shared.module";
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterModule} from 'localize-router';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        LocalizeRouterModule,
        RouterModule
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
