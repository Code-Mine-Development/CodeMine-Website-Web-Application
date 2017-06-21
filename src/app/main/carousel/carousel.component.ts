import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = ['img/img1.jpg', 'img/img2.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
