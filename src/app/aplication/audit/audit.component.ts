import {Component, OnInit} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss'],
  animations: [
    trigger('startImage', [
      state('start', style({
        'transform': 'translateX(-600px)'
      })),
      state('end', style({
        'transform': 'translateX(0px)'
      })),
      transition('start <=> end', animate(1000)),
    ])
  ]
})
export class AuditComponent implements OnInit {
  audits: Audit[];
  state: string = 'start';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.audits = data['audit'];
        });
    this.state = 'end';
  }
}
