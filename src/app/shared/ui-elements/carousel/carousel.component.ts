import {Component, OnInit, ViewChildren, QueryList, Input, OnDestroy} from '@angular/core';
import {Portfolio} from "../../../aplication/portfolio/interfaces/portfolio.interface";

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
  interval;

  constructor() { }

  ngOnInit() {
    this.animateCarousel();
  }

  animateCarousel() {
    this.interval = setInterval(() => {
      this.items.forEach((child) => {
        child.nativeElement.style.transform = 'translateX(-' + window.innerWidth + 'px)';
      });
      setTimeout(() => {
        const first = this.data.shift();
        this.data.push(first);
        this.items.forEach((child) => {
          child.nativeElement.style.transform = 'translateX(0px)';
        });
      }, this.transition);
    }, this.timeout);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
