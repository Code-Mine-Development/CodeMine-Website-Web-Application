import {Subject} from 'rxjs/subject';
import {AnimationConfig} from '../animation.config';
export class ScrollSmooth {

  private animationFrame;
  private end = true;
  private scrollStream = new Subject();

  private targetScrollTop = 0;
  private currentScrollTop = 0;

  setScroll(scroll: number) {
    this.targetScrollTop = scroll;
    if (this.end) {
      this.animationFrame = window.requestAnimationFrame(this.animationFunction.bind(this));
    }
  }

  getSmoothScroll() {
    return this.scrollStream.asObservable();
  }


  private animationFunction() {
    const distance = this.targetScrollTop - this.currentScrollTop;
    this.currentScrollTop += (AnimationConfig.speed * distance);
    if (Math.abs(distance) < 1) {
      this.currentScrollTop = this.targetScrollTop;
      this.end = true;
      window.cancelAnimationFrame(this.animationFrame);
    } else {
      this.animationFrame = window.requestAnimationFrame(this.animationFunction.bind(this))
    }

    this.scrollStream.next(this.currentScrollTop);
  }
}
