import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditDetailsComponent} from './audit-details/audit-details.component';
import {AuditListComponent} from './audit-list/aduit-list.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        AuditDetailsComponent,
        AuditListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AuditDetailsComponent,
        AuditListComponent,
        TranslateModule
    ],
    providers: [],
})
export class AuditComponentModule {
}
