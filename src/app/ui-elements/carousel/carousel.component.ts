import {Component, OnInit, ViewChildren, QueryList, Input} from '@angular/core';
import {Portfolio} from "../../shared/interface/portfolio.interface";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChildren('item') items: QueryList<any>;
  @Input() timeout = 5000;
  @Input() transition = 1000;
  @Input() data:Portfolio[];

  constructor() { }

  ngOnInit() {
    this.animateCarousel();
  }

  animateCarousel() {
    setInterval(() => {
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
}
