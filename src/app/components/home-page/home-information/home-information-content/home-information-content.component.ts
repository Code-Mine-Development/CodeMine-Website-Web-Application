import {Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding, Output, EventEmitter} from '@angular/core';
import {AnimationConfig} from '../../animation.config';
import {ScrollController} from '../../services/scroll.controller';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';
import {EventManagerService} from '../../../../shared/services/event-manager.service';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss'],
  providers: [
    ScrollToService
  ]
})
export class HomeInformationContentComponent implements OnInit {

  @ViewChild('scrollableBox', {read: ElementRef}) scrollableBox: ElementRef;
  @ViewChild('followBox', {read: ElementRef}) followBox: ElementRef;
  @ViewChild('homeBox', {read: ElementRef}) homeBox: ElementRef;

  @HostBinding('class.box') boxContainer;
  @HostBinding('class.hidden_motto') hideMotto;
  @HostBinding('class.followBox') followBoxClass;

  @Output() navigate = new EventEmitter();

  duration: number;
  shaftPosition = 0;
  animationBg = 'transparent';
  scrollToHead;

  constructor(private scrollController: ScrollController, private scrollService: ScrollToService, private eventManager: EventManagerService) {
  }

  @HostListener('window:resize', [])
  onResize() {
    this.calculateShaftPosition();
  }

  ngOnInit() {
    this.duration = this.scrollController.getDistance() - 320;
    this.calculateShaftPosition();
    this.changeBackground();
    this.navigateToSection();
    this.eventManager.on('scrollToSiteHead').subscribe(() => {
      this.scrollService.scroll('SiteHead', 'top', this.scrollableBox.nativeElement);
    })
  }

  onScroll() {
    const distanceToAnimation = (this.scrollableBox.nativeElement.offsetHeight * 2),
      scrollTop = this.scrollableBox.nativeElement.scrollTop;
    this.calculateBoxFollow(scrollTop, distanceToAnimation - 320);
    this.scrollController.setScrollEnd(this.checkEnd(scrollTop));
    this.scrollController.setScrollTop(scrollTop, distanceToAnimation - 320, (scrollTop - (distanceToAnimation / 2)));
    if (this.getScrollTop() > 0 && !this.checkEnd(scrollTop)) {
      if(!this.scrollToHead) {
        this.scrollToHead = this.scrollService.scroll('SiteHead');
      } else {
        this.scrollToHead.scroll('SiteHead');
      }
    }
  }

  calculateBoxFollow(scrollTop, distance) {
    const scroll = scrollTop - distance < 0 ? 0 : scrollTop - distance;
    if (scroll > 0) {
      this.followBoxClass = true;
    } else {
      this.followBoxClass = false;
    }
  }

  calculateShaftPosition() {
    const width = window.innerWidth,
      height = this.homeBox.nativeElement.offsetHeight;
    if (height * 1.7 > width) {
      this.shaftPosition = -((height * 1.7 - width ) / 2);
      this.hideMotto = false;
    }
    if (height * 1.15 > width) {
      this.shaftPosition = -((height * 1.15 - width ) / 2);
      this.hideMotto = true;
    }
    if (height * 1.7 < width) {
      this.shaftPosition = window.innerWidth < 768 ? -25 : 0;
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
      return true;
    }
    return false;
  }

  getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  navigateToSection() {
    this.scrollController.getNavigateStream().subscribe((section: number) => {
      if (section === 0) {
        this.scrollService.scroll(window.innerHeight - 80, 'top', this.scrollableBox.nativeElement);
      } else if (AnimationConfig.sections.length + 1 === section) {
        this.scrollService.scroll(this.scrollableBox.nativeElement.scrollHeight, 'top', this.scrollableBox.nativeElement)
      } else {
        const currentSection = AnimationConfig.sections[section - 1],
          average = (currentSection.start + currentSection.end) / 2,
          distancePerFrame = this.scrollController.getDistance() / AnimationConfig.animationFrames,
          distance = average * distancePerFrame,
          targetPosition = (window.innerHeight + this.scrollableBox.nativeElement.offsetHeight - 320) + distance;

        this.scrollService.scroll(targetPosition, 'top', this.scrollableBox.nativeElement);
      }
    })
  }

  navigateToContact() {
    this.navigate.emit();
  }
}
