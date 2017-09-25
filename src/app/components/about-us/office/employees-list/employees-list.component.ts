import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Employees} from '../interfaces/employees.interface';
import {EventManager} from '../event_manager';

@Component({
  selector: 'app-employees-list',
  templateUrl: 'employees-list.component.html',
  styleUrls: ['employees-list.component.scss']
})
export class EmployeesListComponent {

  @Input() employees: Employees;
  @Input() eventManager: EventManager;

  @Output() navigate = new EventEmitter();

  constructor() {
  }

  onNavigate() {
    this.navigate.emit();
  }

}
