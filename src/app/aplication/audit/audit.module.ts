import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditComponent} from './audit.component';
import {AuditResolver} from './services/audit.resolver';
import {AuditService} from './services/audit.service';
import {AuditRoutingModule} from './audit-routing';
import {UiModule} from "../../shared/ui-elements/ui.module";
import {AuditComponentModule} from "../../components/audit/audit-components.module";

@NgModule({
    declarations: [
        AuditComponent,
    ],
    imports: [
        CommonModule,
        UiModule,
        AuditRoutingModule,
        AuditComponentModule
    ],
    exports: [],
    providers: [AuditService, AuditResolver]
})
export class AuditModule {
}
