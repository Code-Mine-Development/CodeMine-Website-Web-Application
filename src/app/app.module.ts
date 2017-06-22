import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StartAnimationComponent } from './main/start-animation/start-animation.component';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './offer/offer.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavigationComponent } from './portfolio/navigation/navigation.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ProjectDetailComponent } from './portfolio/projects/project-detail/project-detail.component';
import { CtaComponent } from './portfolio/cta/cta.component';
import { ProjectComponent } from './portfolio/projects/project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartAnimationComponent,
    HeaderComponent,
    OfferComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    NavigationComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    CtaComponent,
    ProjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
