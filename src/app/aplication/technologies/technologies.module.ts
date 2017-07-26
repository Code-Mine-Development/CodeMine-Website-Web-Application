import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

import { TechnologiesService } from './services/technologies.service';
import { TechnologiesRoutingModule } from './technologies.routing';
import { TechnologiesComponent } from './technologies.component';
import { TechnologyComponent } from './technology/technology.component'

@NgModule({
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    RouterModule,
    HttpModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  providers:[
    TechnologiesService,

  ],
  declarations: [
    TechnologiesComponent,
    TechnologyComponent
  ]
})
export class TechnologiesModule { }
