import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Employees} from './interfaces/employees.interface';

@Component({
  selector: 'app-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.scss'],
})
export class OfficeComponent implements OnInit {

  @Input() employees: Employees;
  modelVisible = false;
  listVisible = false;
  modelStatus = 'maximize';

  private breakPoint = 800;

  constructor() {
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.checkSize();
  }

  ngOnInit() {
    this.checkSize();
  }

  checkSize() {
    this.modelVisible = window.innerWidth > this.breakPoint;
  }

  setModelNavigate(status) {
    this.modelStatus = status;
  }

  setListVisible(status) {
    this.listVisible = status;
  }

}
