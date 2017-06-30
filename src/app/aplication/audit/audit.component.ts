import {Component, Input, OnInit} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
    ],
})
export class AuditComponent implements OnInit {
  audits: Audit[];
  @Input() isVisible = true;
  visibility = 'shown';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.audits = data['audit'];
        });
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
