import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import { TechnologiesResolver } from './services/technologies.resolver';
import { ToolsResolver } from './services/tools.resolver';
import { OfferElementsService } from './services/offerElements.service';

import { OfferElementComponent } from './offerElement/offerelement.component';


const routes: Routes = [
  { path: 'technologies', children: [
    { path: ':id', component: OfferElementComponent, resolve: { 'offerelement': TechnologiesResolver}},
    { path: '', component: OfferElementComponent, resolve: { 'offerelement': TechnologiesResolver}}
  ]},
  { path: 'tools', children: [
    { path: ':id', component: OfferElementComponent, resolve: { 'offerelement': ToolsResolver}},
    { path: '', component: OfferElementComponent, resolve: { 'offerelement': ToolsResolver}}
  ]}
];

@NgModule({
  imports: [
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  providers: [
    TechnologiesResolver,
    ToolsResolver,
    OfferElementsService
  ],
  exports: [RouterModule]
})
export class OfferElementsRoutingModule { }
