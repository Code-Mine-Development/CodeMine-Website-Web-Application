import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from "./desk/desk.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ArrowComponent} from "./arrow/arrow.component";
import { PersonComponent } from './person/person.component';
import {UiModule} from "../../shared/ui-elements/ui.module";
import { DoorComponent } from './door/door.component';
import {ClosePersonService} from "../../shared/services/close-person.service";
import {ScrollToModule} from "ng2-scroll-to";


@NgModule({
  declarations: [
    DeskComponent,
    ArrowComponent,
    PersonComponent,
    DoorComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    ScrollToModule.forRoot(),

  ],
  exports: [
    DeskComponent,
    ArrowComponent,
    PersonComponent,
    DoorComponent,
  ],
  providers: [ClosePersonService],
})
export class AboutUsComponentModule {
}
