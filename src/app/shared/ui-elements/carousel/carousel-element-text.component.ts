import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {trigger, transition, animate, state, style, keyframes} from '@angular/animations';

@Component({
  selector: 'app-carousel-element-text',
  template: `
  <article>
    <h1 [@text-fade]="title" >{{parsedTitle | translate}}</h1>
    <h3 [@text-fade]="title" >{{parsedSubTitle | translate}}</h3>
    <button type="button" class="btn btn-large btn-white" (click)="onNavigate()">{{'PORTFOLIO.checkPortfolio' | translate}}</button>
  </article>

  `,
  styleUrls: ['./carousel-element-text.component.scss'],
  animations: [
    trigger('text-fade', [
      transition("* => *", animate('1s ease-in-out', keyframes([
        style({opacity: 1, offset:0}),
        style({opacity: 0, offset:.5}),
        style({opacity: 1, offset:1})
      ])))
    ])
  ]
})
export class CarouselElementTextComponent implements OnChanges {

  @Input() title: string;
  @Input() subTitle: string;
  @Output() navigate =  new EventEmitter();
  parsedTitle: string;
  parsedSubTitle: string;

  constructor() {
  }

  ngOnChanges() {
    setTimeout( () => {
      this.parsedTitle = this.title;
      this.parsedSubTitle = this.subTitle;
    }, 500)
  }

  onNavigate(){
    this.navigate.emit();
  }

}
