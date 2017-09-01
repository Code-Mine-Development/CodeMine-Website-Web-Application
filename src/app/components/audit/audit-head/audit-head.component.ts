import {Component, OnInit, Input, ElementRef, OnChanges, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-audit-head',
  templateUrl: './audit-head.component.html',
  styleUrls: ['./audit-head.component.scss']
})
export class AuditHeadComponent implements  AfterViewInit {

  @Input() audits;
  @Input() scrollTarget = [ElementRef];

  constructor() { }

  ngAfterViewInit() {
    console.log(this.scrollTarget)
    setTimeout( ()=> { console.log(this.scrollTarget)}, 2000);
  }

}
