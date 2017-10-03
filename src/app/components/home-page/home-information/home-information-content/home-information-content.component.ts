import {Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding} from '@angular/core';
import {AnimationConfig} from '../../animation.config';
import {ScrollController} from '../../services/scroll.controller';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss']
})
export class HomeInformationContentComponent implements OnInit {

  @ViewChild('scrollableBox', {read: ElementRef}) scrollableBox: ElementRef;
  @ViewChild('followBox', {read: ElementRef}) followBox: ElementRef;

  @HostBinding('class.box') boxContainer;
  @HostBinding('class.hidden_motto') hideMotto;

  duration = AnimationConfig.duration;
  shaftPosition = 0;

  constructor(private scrollController: ScrollController, private scrollService: ScrollToService) {
  }

  @HostListener('window:resize', []) onResize() {
    this.calculateShaftPosition();
  }

  ngOnInit() {
    this.calculateBoxSize();
    this.calculateShaftPosition();

  }

  onScroll() {
    const distanceToAnimation = (window.innerHeight * 2 - 160);
    this.scrollController.setScrollTop(this.scrollableBox.nativeElement.scrollTop, distanceToAnimation);
    this.calculateBoxSize();
    this.calculateBoxFollow(this.scrollableBox.nativeElement.scrollTop, distanceToAnimation);
    this.scrollService.scroll('SiteHead');
  }

  calculateBoxSize() {
    this.boxContainer = this.scrollableBox.nativeElement.scrollTop > 80;
  }

  calculateBoxFollow(scrollTop, distance) {
    const scroll = scrollTop - distance < 0 ? 0 : scrollTop - distance;
    this.followBox.nativeElement.style.top = scroll + 'px';
  }

  calculateShaftPosition() {
    if (window.innerHeight * 1.7 > window.innerWidth) {
      this.shaftPosition = -((window.innerHeight * 1.7 - window.innerWidth ) / 2);
      this.hideMotto = false;
    }
    if (window.innerHeight * 1.06 > window.innerWidth) {
      this.shaftPosition = -((window.innerHeight * 1.06 - window.innerWidth ) / 2);
      this.hideMotto = true;
    }
    if (window.innerHeight * 1.7 < window.innerWidth) {
      this.shaftPosition = 0;
      this.hideMotto = false;
    }
  }
}
