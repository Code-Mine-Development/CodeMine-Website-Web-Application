import {Injectable} from '@angular/core';
import {ScrollSmooth} from './scroll-smooth';
import {HomeInformationServices} from './home-information.service';
import {AnimationConfig} from '../animation.config';
import {Subject} from 'rxjs';


@Injectable()
export class ScrollController {

  private navigateStream = new Subject();

  private smoothScroll = new ScrollSmooth();
  currentElement = 1;
  clearScrollTop = 0;

  constructor(private homeInformation: HomeInformationServices) {
  }


  setScrollTop(scrollTop: number, firstSectionSize: number, startScrollTop: number) {
    const animationScrollTop = scrollTop - firstSectionSize < 0 ? 0 : scrollTop - firstSectionSize;
    this.clearScrollTop = startScrollTop;
    this.homeInformation.setScrollTop(scrollTop);
    this.smoothScroll.setScroll(animationScrollTop);
  }

  getScrollTop() {
    return this.smoothScroll.getSmoothScroll().map((scrollTop: number) => {
      const frame = this.getFrame(scrollTop),
        section = this.getSection(frame);
      return {
        scrollTop: scrollTop,
        frame: frame,
        section: section,
        horizontal: this.getHorizontalInfo(scrollTop, section)
      }
    });
  }

  private getFrame(scrollTop: number) {
    const scrollFactor = scrollTop / this.getDistance();
    return Math.round(scrollFactor * AnimationConfig.animationFrames);
  }

  getSection(frame: number) {
    let currentSection = -1;

    AnimationConfig.sections.forEach((section, index) => {
      if (section.start <= frame && section.end >= frame) {
        currentSection = index;
      }
    });
    return currentSection;
  }

  private getHorizontalInfo(scrollTop, section) {
    if (this.clearScrollTop > 0 && scrollTop === 0) {
      return {section: 0, title: 'HOME.howWeWork'};
    } else if (this.clearScrollTop <= 0) {
      return null
    } else if (section < 0) {
      return {section: AnimationConfig.sections.length + 1, title: 'HOME.hireUs'}
    } else {
      return {section: section + 1, title: AnimationConfig.sections[section].short}
    }
  }

  navigateTo(section: number) {
    this.navigateStream.next(section);
  }

  getNavigateStream() {
    return this.navigateStream;
  }

  getDistance(){
    if(this.checkMobile()){
      return AnimationConfig.duration / 4;
    } else {
      return AnimationConfig.duration;
    }
  }

  private checkMobile(){
    return window.innerWidth <= 768
  }

}
