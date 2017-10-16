import {AfterViewInit, Component, HostListener, ViewChildren} from '@angular/core';
import {AnimationConfig} from '../../../animation.config';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-home-information-text',
  templateUrl: './home-information-text.component.html',
  styleUrls: ['./home-information-text.component.scss']
})
export class HomeInformationTextComponent implements AfterViewInit {
  textsList = AnimationConfig.sections;
  @ViewChildren('textsElements') texts;

  constructor(private scrollController: ScrollController) {
  }

  @HostListener('window:resize', [])
  onResize() {
  }

  ngAfterViewInit() {
    this.scrollController.getScrollTop().subscribe((scrollInfo) => {
      if (scrollInfo.section < 0) {
        return;
      }
      this.setOnPlaceElements(scrollInfo.section);
      const targetElement = this.texts.toArray()[scrollInfo.section],
        currentSectionObject = this.textsList[scrollInfo.section],
        progress = (scrollInfo.frame - currentSectionObject.start) / (currentSectionObject.end - currentSectionObject.start),
        distance = window.innerHeight + targetElement.nativeElement.offsetHeight,
        currentPosition = window.innerHeight - (distance * progress);
      targetElement.nativeElement.style.color = AnimationConfig.sections[scrollInfo.section]['color'] || ' #282828';
      if(this.checkMobile()){
        targetElement.nativeElement.style.opacity = 1;
        targetElement.nativeElement.classList.remove('hideTop');
        targetElement.nativeElement.classList.remove('hideBottom');
      } else {
        targetElement.nativeElement.style.top = currentPosition + 'px';
        targetElement.nativeElement.style.opacity = 1;
      }
    })
  }

  setOnPlaceElements(section) {
    const textsArray = this.texts.toArray();
    for (const textIndex in textsArray) {
      if (textIndex > section) {
        this.hideBottom(textsArray[textIndex]);
      } else if (textIndex < section) {
        this.hideTop(textsArray[textIndex]);
      }
    }
  }

  hideBottom(element) {
    element.nativeElement.classList.remove('hideTop');
    element.nativeElement.classList.remove('hideBottom');
    if(this.checkMobile()){
      element.nativeElement.style.opacity = 0;
      element.nativeElement.classList.add('hideBottom');
      element.nativeElement.style.top =  '0px';
    } else {
      element.nativeElement.style.top = window.innerHeight + 'px';
      element.nativeElement.style.opacity = 0;
    }

  }

  hideTop(element) {
    element.nativeElement.classList.remove('hideTop');
    element.nativeElement.classList.remove('hideBottom');
    if(this.checkMobile()){
      element.nativeElement.style.opacity = 0;
      element.nativeElement.classList.add('hideTop');
      element.nativeElement.style.top =  '0px';
    } else {
      element.nativeElement.style.top = (-element.nativeElement.offsetHeight) + 'px';
      element.nativeElement.style.opacity = 0;
    }
  }

  checkMobile() {
    if (window.innerWidth < window.innerHeight && window.innerWidth <= 768) {
      return true;
    }
    return false;
  }

}
