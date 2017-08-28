import {Component, AfterViewInit, Input, OnChanges, ElementRef, HostBinding} from '@angular/core';
import * as Vivus from 'vivus';
import {ComponentTemplate, RegisterElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
  styleUrls: ['knowledge.component.scss']
})
export class KnowledgeComponent extends ComponentTemplate implements AfterViewInit {

  @HostBinding('class.horizontal') horizontal;

  private svg;
  visible = false;

  constructor(scrollController: ScrollController, element: ElementRef) {
    super(scrollController, element);
  }

  ngAfterViewInit() {
    this.svg = new Vivus('test_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/wiedza.svg'});
  }

  animateHide(id, direction) {
    if (direction === 'up') {
      setTimeout(() => this.visible = false, 1000);
    }
  }

  animateShow(id, cb, direction) {
    if (direction === 'up' && !this.visible) {
      this.svg.setFrameProgress(1);
    } else if (direction === 'down') {
      this.svg.reset().stop();
      setTimeout(() => this.svg.play(1.3), 1000);
    }
    setTimeout(() => {
      cb();
    }, 1500);

    this.visible = true;
  }


  registerElements(): [RegisterElement] {
    return [
      {localId: 1, title: 'HOME.knowledge'}
    ]
  }


}
