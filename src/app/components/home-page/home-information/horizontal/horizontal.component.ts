import {Component, OnInit} from '@angular/core';
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
  sectionTitle = '';

  constructor(private scrollController: ScrollController) {
    scrollController.getScrollTop().subscribe(
      (scrollInfo) => {
        if (!scrollInfo.horizontal) {
          this.hidden = true;
        } else {
          this.sectionNumber = scrollInfo.horizontal.section;
          this.sectionTitle = scrollInfo.horizontal.title;
          this.hidden = false;
        }
      }
    )
  }

  ngOnInit() {
  }

  getSectionCount() {
    return AnimationConfig.sections.length + 1;
  }


  moveToLast() {
    this.scrollController.navigateTo(this.getSectionCount());
  }

  moveToPrev() {
    this.scrollController.navigateTo(this.sectionNumber-1);
  }
}
