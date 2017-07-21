import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from "localize-router";
import { TechnologiesResolver } from './services/technologies.resolver';
import { TechnologiesService } from './services/technologies.service';

import { TechnologyComponent } from './technology/technology.component';
import { TechnologiesComponent } from "./technologies.component";


const routes: Routes = [
  { path:'technologies', component:TechnologiesComponent, children:[
    { path: '**', component:TechnologyComponent, resolve:{ "technologies":TechnologiesResolver}}
  ]}
];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  providers:[
    TechnologiesService,
    TechnologiesResolver
  ],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
