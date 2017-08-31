import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {Routes, RouterModule} from '@angular/router';
import {LocalizeRouterModule} from 'localize-router';

const testRoutes: Routes = [
  {path: '', component: TestComponent}
];


@NgModule({
  imports: [
    CommonModule,
    LocalizeRouterModule.forChild(testRoutes),
    RouterModule.forChild(testRoutes)
  ],
})
export class TestRoutingModule {
}
