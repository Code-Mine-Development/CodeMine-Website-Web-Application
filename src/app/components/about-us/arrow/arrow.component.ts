import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-arrow',
  template: `<div class="scroll" [ngStyle]="{'top': '-' + topOffset + 'px'}" (click)="scrollDown()" (mouseenter)="moveArrow(true)" (mouseleave)="moveArrow(false)"><i [@arrow]="state" class="fa fa-chevron-down" aria-hidden="true"><a href="target" scrollTo ></a></i></div>`,
  styleUrls: ['./arrow.component.scss'],
  animations: [
    trigger('arrow', [
      state('down', style({
        'font-size': '15px',
        'transform': 'translateY(0)'
      })),
      state('up', style({
        'font-size': '17px',
        'transform': 'translateY(-5px)'
      })),

      transition('down <=> up', animate(800)),
    ])
  ]
})
export class ArrowComponent implements OnInit, OnDestroy{
  @ViewChild('scrollTo') private scroll: ElementRef;
  state = 'down';
  arrowInterval: any;

  constructor() {
  }

  ngOnInit() {
  }

  moveArrow(value: boolean): void {
    if (value) {
      this.state = 'up';
      this.arrowInterval = setInterval(() => {
        this.state === 'down' ? this.state = 'up' : this.state = 'down';
      }, 800)
    } else {
      clearInterval(this.arrowInterval);
      this.state = 'down';
      this.arrowInterval = null;
    }
  }

  scrollDown(): void {
    try {
      this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    } catch(err) { }
  }

  ngOnDestroy() {
    clearInterval(this.arrowInterval);
  }

}
