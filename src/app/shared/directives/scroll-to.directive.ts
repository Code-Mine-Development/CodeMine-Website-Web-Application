import {Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input('appScrollTo') target: any;
  @Input('appScrollToOpponent') opponent:any;

  @HostListener('click') scroll() {
    this.reset();
    this.filterTarget();
    this.chooseOppenent();
    this.scrollTo();
  }

  private scrollingOpponent:any = null;
  private targetPosition:number = null;
  private currentPosition:number = null;
  private start:number = null;
  private duration:number = 500



  constructor(@Inject(DOCUMENT) private document){}

  reset(){
    this.scrollingOpponent = null;
    this.targetPosition = null;
    this.currentPosition = null;
    this.start = null;
  }

  chooseOppenent(){
    this.scrollingOpponent = this.opponent ? this.opponent : this.document;
  }

  filterTarget(){
    if(this.target === 'SiteHead')
      return;
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
        animationPosition = this.currentPosition + (distance * progressFactorWithEasing);

    this.changeScrollTop(animationPosition);

    if(this.duration > progress)
      window.requestAnimationFrame(this.scrollToElement.bind(this))

  }

  getCurrentPosition(){
    if(this.opponent)
      return this.scrollingOpponent.scrollTop;
    return this.scrollingOpponent.body.scrollTop || this.scrollingOpponent.documentElement.scrollTop;
  }

  getTargetPosition() {
    if(this.target === "SiteHead")
      return 0;

    let distance = this.target.offsetTop;
    let parent: any = this.target.offsetParent;

    while (!parent) {
      distance += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return distance;
  }

  changeScrollTop(position){
    if(this.opponent)
      return this.scrollingOpponent.scrollTop = position;
    this.scrollingOpponent.body.scrollTop = position;
    this.scrollingOpponent.documentElement.scrollTop = position;
  }

}
