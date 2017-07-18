import {AfterViewInit, Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input('appScrollTo') target: any;

  @HostListener('click') scroll() {
    this.reset();
    this.filterTarget();
    this.scrollTo();
  }

  private targetPosition:number = null;
  private currentPosition:number = null;
  private start:number = null;
  private duration:number = 500;

  constructor(@Inject(DOCUMENT) private document) {
  }

  reset(){
    this.targetPosition = null;
    this.currentPosition = null;
    this.start = null;
  }

  filterTarget(){
    this.target =  typeof this.target == 'object' ? this.target : this.document.querySelector('#'+this.target);
  }

  scrollTo() {
    this.targetPosition = this.getTargetPosition();
    this.currentPosition = this.getCurrentPosition();
    window.requestAnimationFrame(this.scrollToElement.bind(this));
  }

  scrollToElement(timestamp) {
    if(!this.start) this.start = timestamp;

    let progress = timestamp - this.start,
        progressFactor = progress / this.duration,
        progressFactorWithEasing = Math.sqrt(progressFactor),
        distance = this.targetPosition - this.currentPosition,
        animationPosition = distance * progressFactorWithEasing;

    this.changeScrollTop(animationPosition);

    if(this.duration > progress)
      window.requestAnimationFrame(this.scrollToElement.bind(this))

  }

  getCurrentPosition(){
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

  getTargetPosition() {
    let distance = this.target.offsetTop;
    let parent: any = this.target.offsetParent;

    while (!parent) {
      distance += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return distance;
  }

  changeScrollTop(position){
    this.document.body.scrollTop = position;
    this.document.documentElement.scrollTop = position;
  }

}
