import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from "./about-us.component";
import {OfficeComponent} from "./office/office.component";
import {AboutUsRoutingModule} from "./about-us.routing.module";
import {DeskComponent} from "../../components/about-us/desk/desk.component";
import {AboutUsComponentModule} from "../../components/about-us/about-us-components.module";

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    AboutUsComponentModule
  ],
  declarations: [
    AboutUsComponent,
    OfficeComponent,
  ],
  providers: [],
})
export class AboutUsModule {
}
