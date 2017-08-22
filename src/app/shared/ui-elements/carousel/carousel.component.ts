import {Component, OnInit, ViewChildren, QueryList, Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChildren('item') items: QueryList<any>;
  @Input() timeout = 5000;
  @Input() transition = 1000;
  @Input() data: Portfolio[];

  @Output() navigate = new EventEmitter();

  interval;
  currentElement: number = 0;

  constructor() {
  }

  ngOnInit() {
    if (this.data.length > 0) {
      this.animateCarousel();
    }
  }

  animateCarousel() {
    this.interval = setInterval(() => {
      this.currentElement++;
      if (this.currentElement + 1 > this.data.length) {
        this.currentElement = 0;
      }
    }, 3000)
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onNavigate(){
    this.navigate.emit('/portfolio');
  }
}
