import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditDetailsComponent} from './audit-details/audit-details.component';
import {AuditListComponent} from './audit-list/aduit-list.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


import {DrawBackgroundService} from '../../shared/services/draw-background.service';
import {AuditListElementComponent} from './audit-list/audit-list-element.component';
import { AuditHeadComponent } from './audit-head/audit-head.component';


@NgModule({
  declarations: [
    AuditDetailsComponent,
    AuditListComponent,
    AuditListElementComponent,
    AuditHeadComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    AuditHeadComponent,
    AuditDetailsComponent,
    AuditListComponent

  ],
  providers: [DrawBackgroundService],
})
export class AuditComponentModule {
}
