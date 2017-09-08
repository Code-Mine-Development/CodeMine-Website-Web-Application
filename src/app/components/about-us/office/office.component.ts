import {Component, OnInit, Input} from '@angular/core';
import {Employees} from './interfaces/employees.interface';
import {EventManager} from './event_manager';

@Component({
  selector: 'app-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.scss'],
})
export class OfficeComponent implements OnInit {
  @Input() employees: Employees;

  eventManager = new EventManager();



  constructor() {
  }

  ngOnInit() {
  }

}
