import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from "./desk/desk.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ArrowComponent} from "./arrow/arrow.component";

@NgModule({
  declarations: [
    DeskComponent,
    ArrowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeskComponent,
    ArrowComponent
  ],
  providers: [],
})
export class AboutUsComponentModule {
}
