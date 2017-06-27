import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {CoreModule} from './core/core-module';
import {PortfolioService} from './shared/service/portfolio.service';
import {HomePageResolver} from './core/home-page/home-page.resolver';
import {ContactResolver} from './contact/contact.resolver';
import {ContactService} from './contact/contact.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        CoreModule,
    ],
    providers: [PortfolioService, HomePageResolver, ContactResolver, ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
