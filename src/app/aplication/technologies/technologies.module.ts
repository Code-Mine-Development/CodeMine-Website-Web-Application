import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TechnologiesService } from './services/technologies.service';
import { TranslateModule } from '@ngx-translate/core'

import { TechnologiesRoutingModule } from './technologies.routing';
import { TechnologiesComponent } from './technologies.component';
import { TechnologyComponent } from './technology/technology.component'

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    RouterModule,
    HttpModule,
    TranslateModule
  ],
  providers:[
    TechnologiesService
  ],
  declarations: [
    TechnologiesComponent,
    TechnologyComponent
  ]
})
export class TechnologiesModule { }
