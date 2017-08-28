import {Component, ElementRef, HostBinding, AfterViewInit} from '@angular/core';
import {ComponentTemplate, RegisterElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent extends ComponentTemplate implements AfterViewInit {

  @HostBinding('style.background') background;

  private svgUX;
  private svgUI;
  visible = false;
  UiVisible = false;

  constructor(scrollController: ScrollController, element: ElementRef) {
    super(scrollController, element);
  }


  ngAfterViewInit() {
    this.svgUX = new Vivus('UX_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/UX.svg'});
    this.svgUI = new Vivus('UI_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/UI.svg'});
  }

  animateHide(id, direction) {
    if (id === 1 && direction === 'up') {
      setTimeout(() => this.visible = false, 1000);
    } else if (id === 2 && direction === 'up') {
      this.hideUI();
    }
  }

  animateShow(id, cb, direction) {
    if (id === 2 && direction === 'up' && !this.visible) {
      this.instantShow();
    } else if (id === 1 && direction === 'down') {
      this.animateUX();
    } else if (id === 2 && direction === 'down') {
      this.animateUI();
    }

    setTimeout(() => {
      cb();
    }, 1500)
    this.visible = true;
  }

  hideUI() {
    this.UiVisible = false;
    this.background = '#fff';
  }

  animateUX() {
    this.svgUX.reset().stop();
    setTimeout(() => this.svgUX.play(2), 1000);
  }

  animateUI() {
    this.UiVisible = true;
    this.background = '#000';
    this.svgUI.reset().stop();
    setTimeout(() => this.svgUI.play(2), 50);
  }

  instantShow() {
    this.svgUI.setFrameProgress(1);
    this.svgUX.setFrameProgress(1);
    this.UiVisible = true;
    this.background = '#000';
  }


  registerElements(): [RegisterElement] {
    return [
      {localId: 1, title: 'HOME.UX'},
      {localId: 2, title: 'HOME.UI'}
    ]
  }
}
