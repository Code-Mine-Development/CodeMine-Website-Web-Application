import {Directive, HostListener, Input} from '@angular/core';
import {ScrollToService} from '../services/scroll-to.service';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() appScrollTo: any;
  @Input() appScrollToOpponent: any;
  @Input() appLocationOnScreenAfterScrolling: any;

  @HostListener('click') scroll() {
    this.scrollToService.scroll(this.appScrollTo, this.appLocationOnScreenAfterScrolling, this.appScrollToOpponent);
  }

  constructor(private scrollToService: ScrollToService) {
  }

}
