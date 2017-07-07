import {AfterViewInit, Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss'],

})

export class AuditListComponent implements OnInit,  AfterViewInit{
  @Input() listData;
  @Input() title: string;

  constructor () {}

  ngOnInit(){};

  ngAfterViewInit(){

  }
}
