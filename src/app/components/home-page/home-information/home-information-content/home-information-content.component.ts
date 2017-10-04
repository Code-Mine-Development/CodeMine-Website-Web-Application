import {Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding, Output, EventEmitter} from '@angular/core';
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

  @Output() skip = new EventEmitter();

  duration = AnimationConfig.duration - 320;
  shaftPosition = 0;
  animationBg = 'transparent';

  padding = 80;

  constructor(private scrollController: ScrollController, private scrollService: ScrollToService) {
  }

  @HostListener('window:resize', [])
  onResize() {
    this.calculateShaftPosition();
  }

  ngOnInit() {
    this.calculateBoxSize();
    this.calculateShaftPosition();
    this.changeBackground();
  }

  onScroll() {
    const distanceToAnimation = (this.scrollableBox.nativeElement.offsetHeight * 2),
      scrollTop = this.scrollableBox.nativeElement.scrollTop;
    this.scrollController.setScrollTop(scrollTop, distanceToAnimation - 320, (scrollTop - (distanceToAnimation / 2)));
    this.calculateBoxSize();
    this.checkEnd(scrollTop);
    this.calculateBoxFollow(scrollTop, distanceToAnimation + (2 * this.padding));
    if (this.getScrollTop() > 0) {
      this.scrollService.scroll('SiteHead');
    }
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

  changeBackground() {
    this.scrollController.getScrollTop().subscribe((scrollInfo) => {
      if (scrollInfo.section < 0) {
        return;
      }
      if (AnimationConfig.sections[scrollInfo.section]) {
        this.animationBg = AnimationConfig.sections[scrollInfo.section]['background']
      } else {
        this.animationBg = 'transparent';
      }
    });
  }

  checkEnd(scrollTop: number) {
    const endPosition = this.scrollableBox.nativeElement.scrollHeight,
      currentPosition = scrollTop + this.scrollableBox.nativeElement.offsetHeight;
    if (currentPosition >= endPosition) {
      this.skip.emit();
    }
  }

  getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }
}
