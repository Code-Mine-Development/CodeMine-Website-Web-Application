import {Component, Input} from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss'],
  animations: [
    trigger('moveText', [
      state('down', style({
        'transform': 'translateY(0)'
      })),
      state('up', style({
        'transform': 'translateY(-10px)'
      })),

      transition('down <=> up', animate(1000)),
    ])
  ]
})

export class AuditListComponent {
  @Input() listData;
  @Input() source;
  @Input() title:string;


  constructor () {}
}
