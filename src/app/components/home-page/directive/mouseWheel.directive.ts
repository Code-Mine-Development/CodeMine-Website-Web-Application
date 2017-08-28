import {Directive, Output, HostListener, EventEmitter} from '@angular/core';

@Directive({selector: '[appMouseWheel]'})
export class MouseWheelDirective {
  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  private mobileTouchPosition = 0;

  constructor() {
  }

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('touchstart', ['$event']) touchstart(event: any) {
    const touch = event.touches[0];
    this.mobileTouchPosition = touch.screenY;
  }

  @HostListener('touchmove', ['$event']) touchmove(event: any) {
    this.mobileTouchFunc(event);
  }



  mouseWheelFunc(e: any) {
    const event = window.event || e; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if (delta > 0) {
      this.mouseWheelUp.emit(event);
    } else if (delta < 0) {
      this.mouseWheelDown.emit(event);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }
  }

  mobileTouchFunc(event: any) {
    const touch = event.touches[0];

    if (touch.screenY > this.mobileTouchPosition + 20) {
      this.mobileTouchPosition = touch.screenY;
      this.mouseWheelUp.emit(event);
    } else if (touch.screenY < this.mobileTouchPosition - 20) {
      this.mobileTouchPosition = touch.screenY;
      this.mouseWheelDown.emit(event);
    }

    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }
  }
}
