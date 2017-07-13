import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages.routing';
import { AngularComponent } from '../technologies/angular/angular.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { NodejsComponent } from './nodejs/nodejs.component';

@NgModule({
  imports: [
    CommonModule,
    LanguagesRoutingModule
  ],
  declarations: [AngularComponent, TypescriptComponent, NodejsComponent]
})
export class LanguagesModule { }
