import {Component, Input, OnChanges, HostBinding} from '@angular/core';
import {trigger, transition, animate, state, style} from '@angular/animations';

@Component({
  selector: 'app-carousel-element-image',
  template: `
    <figure >
      <img [src]="imgUrl" alt="slider image">
      <figcaption>{{title}} presentation image</figcaption>
    </figure>
  `,
  styleUrls: ['./carousel-element-image.component.scss'],
  animations: [
    trigger('sliderAnimation', [
      state('hidden', style({left: '-100%'})),
      state('visible', style({left: '0%'})),
      transition('* => hidden', animate('1s ease-in-out')),
      transition('hidden => visible', [
        style({left: '100%'}),
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class CarouselElementImageComponent implements OnChanges {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() index: number;
  @Input() currentIndex: number;
  @HostBinding('@sliderAnimation') visible = 'hidden';


  constructor() {
  }

  ngOnChanges() {
    if (this.currentIndex === this.index) {
      this.visible = 'visible';
    } else {
      this.visible = 'hidden';
    }
  }

}
