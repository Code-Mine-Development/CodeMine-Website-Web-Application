import {Component, ElementRef, AfterViewInit} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {ComponentTemplate, RegisterElement} from '../component.template';

@Component({
  selector: 'app-cta-to-form',
  templateUrl: './cta-to-form.component.html',
  styleUrls: ['./cta-to-form.component.scss']
})
export class CtaToFormComponent extends ComponentTemplate implements AfterViewInit {

  constructor(scrollController: ScrollController, element: ElementRef) {
    super(scrollController, element);
  }

  ngAfterViewInit() {}

  animateHide(id: number) {
    console.log('hide', id);
  }

  animateShow(id, cb) {
    console.log('show', id);
    setTimeout(() => {
      cb();
    }, 1500)
  }

  registerElements(): [RegisterElement] {
    return [
      {localId: 1, title: 'HOME.hireUs'}
    ]
  }
}
