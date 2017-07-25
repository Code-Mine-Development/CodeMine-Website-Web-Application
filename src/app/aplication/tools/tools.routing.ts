import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from "localize-router";
import { TechnologiesResolver } from './services/tools.resolver';
import { TechnologiesService } from './services/tools.service';

import { ToolsComponent } from './tools.component'
import { ToolComponent } from './tool/tool.component';



const routes: Routes = [
  { path:'tools', component:ToolsComponent, children:[
    { path: '**', component:ToolComponent, resolve:{ "tools":TechnologiesResolver}}
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
export class ToolsRoutingModule { }
