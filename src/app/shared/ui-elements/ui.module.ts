import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CloseComponent} from './close/close.component';
import {ButtonComponent} from './button/button.component';
import {SquareImageComponent} from './squareImage/square-image.component';
import {SharedModule} from '../shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterModule} from 'localize-router';
import {RouterModule} from '@angular/router';
import {OfferThumbnailsComponent} from './offer-thumbnails/offer-thumbnails.component';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselElementComponent} from './carousel/carousel-element/carousel-element.component';


@NgModule({
    declarations: [
        ButtonComponent,
        SquareImageComponent,
        CloseComponent,
        OfferThumbnailsComponent,
        CarouselComponent,
        CarouselElementComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        LocalizeRouterModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        ButtonComponent,
        CloseComponent,
        SquareImageComponent,
        OfferThumbnailsComponent,
        CarouselComponent
    ],
    providers: [],
})
export class UiModule {
}
