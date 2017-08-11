import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditDetailsComponent} from './audit-details/audit-details.component';
import {AuditListComponent} from './audit-list/aduit-list.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


import {DrawBackgroundService} from '../../shared/services/draw-background.service';
import {AuditDetailsDirective} from './audit-list/audit-list-element.component';



@NgModule({
    declarations: [
        AuditDetailsComponent,
        AuditListComponent,
      AuditDetailsDirective
    ],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [
        AuditDetailsComponent,
        AuditListComponent,
        SharedModule
    ],
    providers: [DrawBackgroundService],
})
export class AuditComponentModule {
}
