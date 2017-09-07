import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';
import {DrawBackgroundService} from '../../../shared/services/draw-background.service';


@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit {
  @Input() audit: Audit;

  constructor() {
  }

  ngOnInit() {
  };



}
