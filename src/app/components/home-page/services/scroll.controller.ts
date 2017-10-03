import {Injectable} from '@angular/core';
import {ScrollSmooth} from './scroll-smooth';
import {HomeInformationServices} from './home-information.service';
import {AnimationConfig} from '../animation.config';


@Injectable()
export class ScrollController {

  private smoothScroll = new ScrollSmooth();
  currentElement = 1;

  constructor(private homeInformation: HomeInformationServices) {
    // this.smoothScroll.getSmoothScroll().subscribe( (value) => {
    //   console.log(value);
    // })
  }


  setScrollTop( scrollTop:number, firstSectionSize:number ){
    const animationScrollTop = scrollTop - firstSectionSize < 0 ? 0 : scrollTop - firstSectionSize;
    this.homeInformation.setScrollTop(scrollTop);
    this.smoothScroll.setScroll(animationScrollTop);
  }

  getScrollTop(){
    return this.smoothScroll.getSmoothScroll().map( (scrollTop:number) => ({
      scrollTop: scrollTop,
      frame: this.getFrame(scrollTop),
      section: this.getSection(scrollTop)
    }));
  }
  private getFrame(scrollTop: number) {
    const scrollFactor = scrollTop / AnimationConfig.duration;
    return Math.round(scrollFactor * AnimationConfig.animationFrames);
  }

  getSection(scrollTop: number){
    const frame = this.getFrame(scrollTop);
    let currentSection = -1;

    AnimationConfig.sections.forEach( (section, index) => {
      if(section.start <= frame &&  section.end >= frame){
        currentSection = index;
      }
    });
    return currentSection;
  }

}
