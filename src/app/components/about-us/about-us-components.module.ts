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
import {AboutCompanyNameComponent} from "./about-company-name/about-company-name.component";
import { ApproachComponent } from './approach/approach.component';
import { VideoComponent } from './video/video.component';
import { InstagramComponent } from './instagram/instagram.component';
import {ConnectionBackend, Jsonp} from "@angular/http";


@NgModule({
  declarations: [
    DeskComponent,
    ArrowComponent,
    PersonComponent,
    DoorComponent,
    AboutCompanyNameComponent,
    ApproachComponent,
    VideoComponent,
    InstagramComponent
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
    AboutCompanyNameComponent,
    ApproachComponent,
    VideoComponent,
    InstagramComponent
  ],
  providers: [ClosePersonService],
})
export class AboutUsComponentModule {
}
