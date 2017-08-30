import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from './desk/desk.component';
import { PersonComponent } from './person/person.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import { DoorComponent } from './door/door.component';
import {ScrollToModule} from 'ng2-scroll-to';
import {AboutCompanyNameComponent} from './about-company-name/about-company-name.component';
import { ApproachComponent } from './approach/approach.component';
import { VideoComponent } from './video/video.component';
import { InstagramComponent } from './instagram/instagram.component';
import { InstagramPhotoComponent } from './instagram/instagram-photo.component';
import { EmployeesListComponent } from './office/employees-list/employees-list.component';
import { OfficeComponent } from './office/office.component';
import { OfficeModelComponent } from './office/office-model/office-model.component';
import { OfficeNavComponent } from './office/navigation/office-nav.component';
import { ListIconComponent } from './office/navigation/list-icon.component';
import { ModelNavigateIconComponent } from './office/navigation/model-navigate-icon.component';
import { EmployeeComponent } from './office/employees-list/employee.component';



@NgModule({
  declarations: [
    DeskComponent,
    PersonComponent,
    DoorComponent,
    AboutCompanyNameComponent,
    ApproachComponent,
    VideoComponent,
    InstagramComponent,
    InstagramPhotoComponent,
    EmployeesListComponent,
    OfficeComponent,
    OfficeModelComponent,
    OfficeNavComponent,
    ListIconComponent,
    ModelNavigateIconComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    ScrollToModule.forRoot(),

  ],
  exports: [
    DeskComponent,
    PersonComponent,
    DoorComponent,
    AboutCompanyNameComponent,
    ApproachComponent,
    VideoComponent,
    InstagramComponent,
    OfficeComponent
  ],
})
export class AboutUsComponentModule {
}
