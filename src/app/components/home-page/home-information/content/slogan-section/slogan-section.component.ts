import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {ComponentTemplate, RegisterElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-slogan-section',
  template: `
      <h2 >{{ 'HOME.motto.title' | translate}} <br> {{ 'HOME.motto.subtitle' | translate}}</h2>

  `,
  styleUrls: ['./slogan-section.component.scss']
})
export class SloganSectionComponent extends ComponentTemplate implements AfterViewInit {
  constructor(scrollController: ScrollController, element: ElementRef) {
    super(scrollController, element);
  }

  ngAfterViewInit() {
  }


  animateHide(id: number) {
  }

  animateShow(id, cb) {
    setTimeout(() => {
      cb();
    }, 1500)
  }

  registerElements(): [RegisterElement] {
    return [
      {localId: 1, title: 'test slogan title'}
    ]
  }
}
