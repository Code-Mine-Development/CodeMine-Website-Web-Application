import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  @Input('employees') people;

  constructor() { }

  ngOnInit() {
  }

}
