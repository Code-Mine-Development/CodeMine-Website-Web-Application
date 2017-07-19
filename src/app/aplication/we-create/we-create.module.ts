import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { WeCreateRouterModule } from './we-create.routing';


import { BusinesSolutionComponent } from './busines-solution/busines-solution.component';
import { InternalAppsComponent } from './internal-apps/internal-apps.component';
import { TvappsComponent } from './tvapps/tvapps.component';
import { B2cApplicationsComponent } from './b2c-applications/b2c-applications.component';
import { SocialNetworkingComponent } from './social-networking/social-networking.component';
import { WeCreateComponent } from './we-create.component';

@NgModule({
  imports: [
    CommonModule,
    WeCreateRouterModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [BusinesSolutionComponent, InternalAppsComponent, TvappsComponent, B2cApplicationsComponent, SocialNetworkingComponent, WeCreateComponent]
})
export class WeCreateModule { }
