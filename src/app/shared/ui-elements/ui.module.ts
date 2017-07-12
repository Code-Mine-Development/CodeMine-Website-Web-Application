import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {CloseComponent} from "./close/close.component";
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
        SquareImageComponent,
        CloseComponent
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
        SharedModule,
        CloseComponent,
        SquareImageComponent
    ],
    providers: [],
})
export class UiModule {
}
