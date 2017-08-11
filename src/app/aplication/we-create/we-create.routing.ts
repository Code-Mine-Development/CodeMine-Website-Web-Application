import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizeRouterModule } from 'localize-router';
import { RouterModule, Routes } from '@angular/router';

import { BusinesSolutionComponent } from './busines-solution/busines-solution.component';
import {InternalAppsComponent} from './internal-apps/internal-apps.component';
import {B2cApplicationsComponent} from './b2c-applications/b2c-applications.component';
import {SocialNetworkingComponent} from './social-networking/social-networking.component';
import {TvappsComponent} from './tvapps/tvapps.component';
import {WeCreateComponent} from './we-create.component';


const weCreateRoutes: Routes = [
  { path: 'wecreate', component: WeCreateComponent, children: [
    { path: '' , redirectTo: '/offer', pathMatch: 'full'},
    { path: 'solutionstoyourbusinessproblems', component: BusinesSolutionComponent },
    { path: 'internalapps', component: InternalAppsComponent},
    { path: 'b2capplications', component: B2cApplicationsComponent },
    { path: 'socialnetworking', component: SocialNetworkingComponent },
    { path: 'tvapps', component: TvappsComponent }
  ]}
];


@NgModule({
  imports: [
    CommonModule,
    LocalizeRouterModule.forChild(weCreateRoutes),
    RouterModule.forChild(weCreateRoutes)
  ],
  declarations: []
})
export class WeCreateRouterModule { }
