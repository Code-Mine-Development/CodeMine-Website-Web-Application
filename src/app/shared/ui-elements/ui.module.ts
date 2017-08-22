import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel/carousel.component';
import {CommonModule} from '@angular/common';
import {CloseComponent} from './close/close.component';
import {ButtonComponent} from './button/button.component';
import {SquareImageComponent} from './squareImage/square-image.component';
import {SharedModule} from '../shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterModule} from 'localize-router';
import {RouterModule} from '@angular/router';
import { OfferThumbnailsComponent } from './offer-thumbnails/offer-thumbnails.component';
import { CarouselElementTextComponent } from './carousel/carousel-element-text.component';
import { CarouselElementImageComponent } from './carousel/carousel-element-image.component';

@NgModule({
    declarations: [
        CarouselComponent,
        ButtonComponent,
        SquareImageComponent,
        CloseComponent,
        OfferThumbnailsComponent,
        CarouselElementTextComponent,
        CarouselElementImageComponent
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
        SquareImageComponent,
        OfferThumbnailsComponent
    ],
    providers: [],
})
export class UiModule {
}
