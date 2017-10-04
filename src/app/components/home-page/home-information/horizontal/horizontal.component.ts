import {Component, HostListener, OnInit} from '@angular/core';
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
    return AnimationConfig.sections.length + 2;
  }

  // moveToLast() {
  //   this.scrollController.moveToLast();
  // }
  //
  // moveToPrev() {
  //   this.scrollController.move('up');
  // }
}
