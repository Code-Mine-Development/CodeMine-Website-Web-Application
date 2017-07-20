import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss'],

})

export class AuditListComponent implements OnInit, AfterViewInit {
  @Input() listData;
  @Input() source;
  @Input() title:string;

  constructor() {

  }


  ngOnInit() {
    console.log(this.listData, this.source, this.title)
  };

  ngAfterViewInit() {

  }
}


