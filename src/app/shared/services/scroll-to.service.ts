import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ScrollToClass} from './scroll-to.class';

@Injectable()
export class ScrollToService {

  constructor(@Inject(DOCUMENT) private document) {
  }

  scroll(target, onScreenLocation = 'top', opponent?, animationEndCallBack?) {
    return new ScrollToClass(this.document, target, onScreenLocation, opponent, animationEndCallBack);
  }
}
