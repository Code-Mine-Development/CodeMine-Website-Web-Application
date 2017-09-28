import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() portfolio: Portfolio[];
  @Input() currentElement: string;
  @Input() disableNavigation = false;

  @Output() navigate = new EventEmitter();

  visibleIndex;
  direction = 'next';
  private sliderInterval;

  constructor() {
  }

  ngOnInit() {
    const project = this.portfolio.findIndex((element) => (this.currentElement === element.link));
    this.visibleIndex = project ? this.getNextIndex(project) : 0;
    if (this.disableNavigation) {
      this.setSliderInterval();
    }
  }

  ngOnDestroy() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  nextProject() {
    this.visibleIndex = this.getNextIndex(this.visibleIndex);
    this.direction = 'next';
  }

  prevProject() {
    this.visibleIndex = this.getPrevIndex(this.visibleIndex);
    this.direction = 'prev';
  }

  getNextIndex(index) {
    return index + 1 === this.portfolio.length ? 0 : index + 1;
  }

  getPrevIndex(index) {
    return index - 1 < 0 ? this.portfolio.length - 1 : index - 1;
  }

  setProject(index) {
    this.direction = this.visibleIndex < index ? 'next' : 'prev';
    this.visibleIndex = index;
  }

  onNavigate(address) {
    this.navigate.emit(address);
  }

  setSliderInterval() {
    this.sliderInterval = setInterval(() => {
      this.visibleIndex = this.getNextIndex(this.visibleIndex);
    }, 5000)
  }

}
