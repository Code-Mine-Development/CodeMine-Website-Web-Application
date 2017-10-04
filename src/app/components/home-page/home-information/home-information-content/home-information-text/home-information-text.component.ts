import {AfterViewInit, Component, ViewChildren} from '@angular/core';
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
      targetElement.nativeElement.style.top = currentPosition + 'px';
    })
  }

  setOnPlaceElements(section) {
    const textsArray = this.texts.toArray()
    for (const textIndex in textsArray) {
      if (textIndex > section) {
        this.hideBottom(textsArray[textIndex]);
      } else if (textIndex < section) {
        this.hideTop(textsArray[textIndex]);
      }
    }
  }

  hideBottom(element) {
    element.nativeElement.style.top = window.innerHeight + 'px';
  }

  hideTop(element) {
    element.nativeElement.style.top = (-element.nativeElement.offsetHeight) + 'px';
  }

}
