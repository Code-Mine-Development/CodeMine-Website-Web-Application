import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LanguagesRoutingModule } from './languages.routing';
import { TypescriptComponent } from './typescript/typescript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { LanguagesComponent } from './languages.component';

@NgModule({
  imports: [
    CommonModule,
    LanguagesRoutingModule,
    RouterModule
  ],
  declarations: [TypescriptComponent, NodejsComponent, LanguagesComponent]
})
export class LanguagesModule { }
