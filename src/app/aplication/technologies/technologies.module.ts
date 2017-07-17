import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TechnologiesRoutingModule } from './technologies.routing';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    RouterModule
  ],
  declarations: [TechnologiesComponent]
})
export class TechnologiesModule { }
