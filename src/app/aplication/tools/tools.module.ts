import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core'
import { ToolsRoutingModule } from './tools.routing';

import { ToolsComponent } from './tools.component';
import { ToolComponent } from './tool/tool.component';

@NgModule({
  imports: [
    CommonModule,
    ToolsRoutingModule,
    RouterModule,
    TranslateModule,
    HttpModule
  ],
  declarations: [ ToolsComponent, ToolComponent ]
})
export class ToolsModule { }
