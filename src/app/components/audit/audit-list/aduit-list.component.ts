import {Component, Input, NgZone} from '@angular/core';
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
  @Input() title: string;
  state: string = 'down';
  lastScrollTop: number = 0;
  direction: string = '';

  constructor (lc: NgZone) {
    window.onscroll = () => {
      const st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = 'down';
      } else {
        dir = 'up';
      }
      this.lastScrollTop = st;
      lc.run(() => {
        this.direction = dir;
      });
      console.log(this.direction);
    };
  }

  moveText () {
    if (this.direction === 'down') {
      this.state = 'up';
      // this.state === 'down' ? this.state = 'up' : this.state = 'down';
    }
  }
}
