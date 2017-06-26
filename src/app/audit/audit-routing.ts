import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuditComponent} from './audit.component';
import {AuditResolver} from './audit.resolver';

const auditRoutes: Routes = [
    {path: '', component: AuditComponent, resolve: {audit: AuditResolver}},
];


@NgModule({
    imports: [
        RouterModule.forChild(auditRoutes)
    ],
    exports: [RouterModule]
})
export class AuditRoutingModule {

}
