import {Component, OnInit, Input, HostListener} from '@angular/core';
import {Employees} from './interfaces/employees.interface';

@Component({
  selector: 'app-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.scss'],
})
export class OfficeComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onWindowResize(){
    this.checkSize();
  }

  @Input() employees: Employees;

  private breakPoint = 800;

  modelVisible = false;
  listVisible = false;
  modelStatus = "maximize";

  constructor( ) {}

  ngOnInit() {
    this.checkSize();
  }


  checkSize(){
    this.modelVisible = window.innerWidth > this.breakPoint;
  }

  setModelNavigate(status){
    console.log(status);
    this.modelStatus = status;
  }

  setListVisible(status){
    this.listVisible = status;
  }

}
