import {Component, OnInit, Input, HostListener, OnChanges} from '@angular/core';
import {Employees} from './interfaces/employees.interface';

@Component({
  selector: 'app-office',
  templateUrl: 'office.component.html',
  styleUrls: ['office.component.scss'],
})
export class OfficeComponent implements OnInit, OnChanges {
  @HostListener('window:resize', ['$event']) onWindowResize(){
    this.checkSize();
  }

  @Input() employees: Employees;

  private breakPoint = 800;

  private modelVisible = false;
  private listVisible = true;
  private modelStatus = "maximize";

  constructor( ) {}

  ngOnInit() {
    this.checkSize();
  }

  ngOnChanges(){
    console.log(this.listVisible);
    console.log(this.modelStatus);
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
