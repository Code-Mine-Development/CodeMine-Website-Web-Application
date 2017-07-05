import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from "./desk/desk.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ArrowComponent} from "./arrow/arrow.component";
import { PersonComponent } from './person/person.component';
import {UiModule} from "../../shared/ui-elements/ui.module";

@NgModule({
  declarations: [
    DeskComponent,
    ArrowComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    DeskComponent,
    ArrowComponent,
    PersonComponent
  ],
  providers: [],
})
export class AboutUsComponentModule {
}
