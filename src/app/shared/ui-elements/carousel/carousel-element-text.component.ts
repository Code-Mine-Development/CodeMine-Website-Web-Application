import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {trigger, transition, animate, state, style, keyframes} from '@angular/animations';

@Component({
  selector: 'app-carousel-element-text',
  template: `
    <h1 [@text-fade]="title" >{{parsedTitle | translate}}</h1>
    <h3 [@text-fade]="title" >{{subTitle | translate}}</h3>
    <button (click)="onNavigate()" type="button" class="btn btn-large btn-white">{{'PORTFOLIO.checkPortfolio' | translate}}</button>
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
  @Output() navigate = new EventEmitter();
  parsedTitle: string;

  constructor() {
  }

  ngOnChanges() {
    setTimeout( () => {
      this.parsedTitle = this.title;
    }, 500)
  }

  onNavigate(){
    this.navigate.emit();
  }

}
