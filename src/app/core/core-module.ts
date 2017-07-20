import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from '../app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {HomePageComponent} from '../aplication/home-page/home-page.component';
import {CommonModule} from '@angular/common';
import {UiModule} from '../shared/ui-elements/ui.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponentModule} from '../components/contact/contact-components.module';
import {HomePageComponentModule} from '../components/home-page/home-page-components.module';
import {SharedModule} from '../shared/shared.module';
import {LocalizeRouterModule} from 'localize-router';
import {LogoComponent} from './header/logo.component';
import {HomeInformationServices} from '../components/home-page/services/home-information.service';
import {LoadingComponent} from "./header/loadingbar.component";
import {ScrollToModule} from "ng2-scroll-to";
import {SocialServiceComponent} from "./footer/social-service.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        PageNotFoundComponent,
        LogoComponent,
        LoadingComponent,
        SocialServiceComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        UiModule,
        ContactComponentModule,
        HomePageComponentModule,
        ScrollToModule.forRoot(),
        SharedModule,
        LocalizeRouterModule,

    ],
    exports: [
        HeaderComponent,
        FooterComponent,

    ],
    providers: [
      HomeInformationServices
    ]
})
export class CoreModule {
}
