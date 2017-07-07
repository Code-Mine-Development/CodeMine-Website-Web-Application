import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss'],

})

export class AuditListComponent implements OnInit, AfterViewInit {
  @Input() listData;
  @Input() title: string;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    console.log($event);
    console.log("scrolling");
  }

  constructor() {
  }


  ngOnInit() {

  };

  ngAfterViewInit() {

  }
}


