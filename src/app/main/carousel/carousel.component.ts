import {Component, OnInit, ViewChildren, QueryList, Input} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChildren('item') items: QueryList<any>;
  @Input() timeout = 5000;
  @Input() animationDelay = 1500;
  images: Array<Object> = [
    {path: 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg', title: 'test1'},
    {path: 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg', title: 'test2'},
    {path: 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg', title: 'test3'},
  ];

  constructor() { }

  ngOnInit() {
    this.animateCarousel()
  }

  animateCarousel() {
    setInterval(() => {
      this.items.forEach((child) => {
        child.nativeElement.style.transform = 'translateX(-' + window.innerWidth + 'px)';
      });
      setTimeout(() => {
        const first = this.images.shift();
        this.images.push(first);
        this.items.forEach((child) => {
          child.nativeElement.style.transform = 'translateX(0px)';
        });
      }, this.animationDelay);
    }, this.timeout);
  }
}
