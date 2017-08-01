import {Component, OnInit, Input, HostListener, Inject} from '@angular/core';
import {Employees} from '../interfaces/employees.interface';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-employees-list',
  templateUrl: 'employees-list.component.html',
  styleUrls: ['employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  @Input('employees') people:Employees;

  @HostListener('scroll',['$event']) OnScroll(){
    if(this.checkTopPosition())
      this.scrollService.scroll('SiteHead');
  }


  constructor( @Inject(DOCUMENT) private document, private scrollService: ScrollToService) { }

  ngOnInit() {

  }

  checkTopPosition(){
    return (this.document.body.scrollTop || this.document.documentElement.scrollTop) > 0;
  }

}
