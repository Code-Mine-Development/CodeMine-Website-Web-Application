import {Injectable, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ScrollToService {

  private scrollingOpponent:any = null;
  private targetPosition:number = null;
  private currentPosition:number = null;
  private start:number = null;
  private duration:number = 500

  private target;
  private opponent;


  scroll(target, opponent?){
    this.target = target;
    this.opponent = opponent || null;
    this.reset();
    this.filterTarget();
    this.chooseOppenent();
    this.scrollTo();
  }

  constructor(@Inject(DOCUMENT) private document){}

  private reset(){
    this.scrollingOpponent = null;
    this.targetPosition = null;
    this.currentPosition = null;
    this.start = null;
  }

  private chooseOppenent(){
    this.scrollingOpponent = this.opponent ? this.opponent : this.document;
  }

  private filterTarget(){
    if(this.target === 'SiteHead')
      return;
    this.target =  typeof this.target == 'object' ? this.target : this.document.querySelector('#'+this.target);
  }



  private scrollTo() {
    this.targetPosition = this.getTargetPosition();
    this.currentPosition = this.getCurrentPosition();
    window.requestAnimationFrame(this.scrollToElement.bind(this));
  }

  private scrollToElement(timestamp) {
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

  private getCurrentPosition(){
    if(this.opponent)
      return this.scrollingOpponent.scrollTop;
    return this.scrollingOpponent.body.scrollTop || this.scrollingOpponent.documentElement.scrollTop;
  }

  private getTargetPosition() {
    if(this.target === "SiteHead")
      return 0;

    let distance = this.target.offsetTop;
    let parent: any = this.target.offsetParent;

    while (!parent) {
      distance += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return distance-150;
  }

  private changeScrollTop(position){
    if(this.opponent)
      return this.scrollingOpponent.scrollTop = position;
    this.scrollingOpponent.body.scrollTop = position;
    this.scrollingOpponent.documentElement.scrollTop = position;
  }


}