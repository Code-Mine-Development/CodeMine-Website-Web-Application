import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditDetailsComponent} from './audit-details/audit-details.component';
import {AuditListComponent} from './audit-list/aduit-list.component';

@NgModule({
    declarations: [
        AuditDetailsComponent,
        AuditListComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AuditDetailsComponent,
        AuditListComponent
    ],
    providers: [],
})
export class AuditComponentModule {
}
