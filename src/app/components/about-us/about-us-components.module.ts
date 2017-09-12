import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeskComponent} from './office/office-model/desk/desk.component';
import { PersonComponent } from './office/person/person.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import { DoorComponent } from './office/office-model/door/door.component';
import {ScrollToModule} from 'ng2-scroll-to';
import {AboutCompanyNameComponent} from './about-company-name/about-company-name.component';
import { ApproachComponent } from './approach/approach.component';
import { InstagramComponent } from './instagram/instagram.component';
import { InstagramPhotoComponent } from './instagram/instagram-photo.component';
import { EmployeesListComponent } from './office/employees-list/employees-list.component';
import { OfficeComponent } from './office/office.component';
import { OfficeModelComponent } from './office/office-model/office-model.component';
import { EmployeeComponent } from './office/employees-list/employee.component';



@NgModule({
  declarations: [
    DeskComponent,
    PersonComponent,
    DoorComponent,
    AboutCompanyNameComponent,
    ApproachComponent,
    InstagramComponent,
    InstagramPhotoComponent,
    EmployeesListComponent,
    OfficeComponent,
    OfficeModelComponent,
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
    InstagramComponent,
    OfficeComponent
  ],
})
export class AboutUsComponentModule {
}
