import {Component, Input, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-audit-head',
  templateUrl: './audit-head.component.html',
  styleUrls: ['./audit-head.component.scss']
})
export class AuditHeadComponent implements AfterViewInit {

  @Input() audits;
  @Output() scrollTo = new EventEmitter();

  constructor() {
  }

  ngAfterViewInit() {
  }

  onClick(id) {
    this.scrollTo.emit(id);
  }

}
