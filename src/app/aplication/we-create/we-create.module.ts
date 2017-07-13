import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeCreateRouterModule } from './we-create.routing';
import { TranslateModule } from "@ngx-translate/core";
import { BusinesSolutionComponent } from './busines-solution/busines-solution.component';
import { InternalAppsComponent } from './internal-apps/internal-apps.component';
import { TvappsComponent } from './tvapps/tvapps.component';
import { B2cApplicationsComponent } from './b2c-applications/b2c-applications.component';
import { SocialNetworkingComponent } from './social-networking/social-networking.component';

@NgModule({
  imports: [
    CommonModule,
    WeCreateRouterModule,
    TranslateModule
  ],
  declarations: [BusinesSolutionComponent, InternalAppsComponent, TvappsComponent, B2cApplicationsComponent, SocialNetworkingComponent]
})
export class WeCreateModule { }
