import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {UiModule} from "../ui-elements/ui.module";
import {AuditComponent} from "./audit.component";
import {AuditDetailsComponent} from "./audit-details/audit-details.component";
import {AuditResolver} from "./audit.resolver";
import {AuditService} from "./audit.service";
import {AuditRoutingModule} from "./audit-routing";

@NgModule({
    declarations: [
        AuditDetailsComponent,
        AuditComponent,
    ],
    imports: [
        CommonModule,
        UiModule,
        AuditRoutingModule
    ],
    exports:[],
    providers:[AuditService, AuditResolver]
})
export class AuditModule {
}