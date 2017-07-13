import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  { path:'languages', children:[
    { path: '', redirectTo: "/offer", pathMatch:"full" },
    { path: 'nodejs', component: NodejsComponent}
  ]}
];
@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LanguagesRoutingModule { }
