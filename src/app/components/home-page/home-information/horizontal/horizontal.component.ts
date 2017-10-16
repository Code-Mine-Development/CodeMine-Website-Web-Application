import {Component, OnInit, HostBinding} from '@angular/core';
import {ScrollController} from '../../services/scroll.controller';
import {AnimationConfig} from '../../animation.config';

@Component({
  selector: 'app-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  hidden = true;
  sectionNumber = 0;

  @HostBinding('class.black') black = true;

  constructor(private scrollController: ScrollController) {
    scrollController.getScrollTop().subscribe(
      (scrollInfo) => {
        if (!scrollInfo.horizontal) {
          this.hidden = true;
        } else {
          this.sectionNumber = scrollInfo.horizontal.section;
          this.hidden = false;
        }

        if (AnimationConfig.sections[scrollInfo.section] && AnimationConfig.sections[scrollInfo.section]['background'] !== '#282828') {
          this.black = true;
        } else {
          this.black = false;
        }

        if (!scrollInfo.horizontal || scrollInfo.horizontal.section < 1) {
          this.black = false;
        } else if (scrollInfo.horizontal.section === 10) {
          this.black = true;
        }
      }
    )
  }

  ngOnInit() {
  }

  getSectionCount() {
    return AnimationConfig.sections.length + 1;
  }


  moveTo(index) {
    if (index === this.sectionNumber) {
      return;
    }
    this.scrollController.navigateTo(index);
  }

  getIterableArray(count: number) {
    return new Array(count);
  }

}
