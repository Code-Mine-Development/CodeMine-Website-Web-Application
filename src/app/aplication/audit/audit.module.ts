import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditComponent} from './audit.component';
import {AuditResolver} from './services/audit.resolver';
import {AuditService} from './services/audit.service';
import {AuditRoutingModule} from './audit-routing';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {AuditComponentModule} from '../../components/audit/audit-components.module';
import {SharedModule} from "../../shared/shared.module";
import {Http} from "@angular/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateModule} from "@ngx-translate/core";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}

@NgModule({
  declarations: [
    AuditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    AuditRoutingModule,
    AuditComponentModule,
    TranslateModule
  ],
  exports: [],
  providers: [AuditService, AuditResolver]
})
export class AuditModule {
}
