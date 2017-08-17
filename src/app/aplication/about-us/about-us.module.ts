import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from "./about-us.component";
import {AboutUsRoutingModule} from "./about-us.routing.module";
import {AboutUsComponentModule} from "../../components/about-us/about-us-components.module";
import {ClosePersonService} from "../../shared/services/close-person.service";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    AboutUsComponentModule,
    AboutUsRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [
    AboutUsComponent
  ],
  providers: [ClosePersonService],
})
export class AboutUsModule {
}
