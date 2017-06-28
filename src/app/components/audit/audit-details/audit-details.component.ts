import {Component, OnInit, Input} from '@angular/core';
import {Audit} from "../../../aplication/audit/interfaces/audit.interface";

@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],
  host: {
    '(window:resize)' : 'registerWindowChange($event)'
  }
})
export class AuditDetailsComponent implements OnInit {
  width: number = window.innerWidth;
  @Input() audit: Audit[];

  constructor() {}

  registerWindowChange(event): void {
    this.width = event.target.innerWidth;
  }

  ngOnInit() {}
}
