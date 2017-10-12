import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Employees} from './interfaces/employees.interface';
import {EventManager} from '../../../shared/services/event_manager';

@Component({
  selector: 'app-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.scss'],
})
export class OfficeComponent implements OnInit {
  @Input() employees: Employees;
  @Output() navigate = new EventEmitter();
  eventManager = new EventManager();


  constructor() {
  }

  ngOnInit() {
  }

  toContactForm() {
    this.navigate.emit('contact');
  }

}
