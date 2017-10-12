import {Component, Input} from '@angular/core';
import {Employees} from '../interfaces/employees.interface';
import {EventManager} from '../../../../shared/services/event_manager';

@Component({
  selector: 'app-office-model',
  templateUrl: './office-model.component.html',
  styleUrls: ['./office-model.component.scss'],
})
export class OfficeModelComponent  {
  @Input() employees: Employees;
  @Input() eventManager: EventManager;

  constructor() {
  }
}
