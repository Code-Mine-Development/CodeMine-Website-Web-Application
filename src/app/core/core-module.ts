import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CommonModule} from '@angular/common';
import {UiModule} from '../ui-elements/ui.module';
import {HomeInformationComponent} from './home-page/home-information/home-information.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        HomeInformationComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        UiModule,
        ScrollToModule.forRoot(),
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: []
})
export class CoreModule {
}
