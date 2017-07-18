import {AfterViewInit, Directive, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective implements AfterViewInit {
  @Input('appScrollTo') target: any;


  @HostListener('click') scroll() {
    this.filterTarget();
    let distance = this.getDistance();
    this.scrollTo(distance);

  }

  ngAfterViewInit() {
  }

  constructor(@Inject(DOCUMENT) private document) {
  }
  filterTarget(){
    this.target =  typeof this.target == 'object' ? this.target : this.document.querySelector('#'+this.target);

  }
  getDistance() {
    let distance = this.target.offsetTop;
    let parent: any = this.target.offsetParent;

    while (!parent) {
      distance += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return distance;
  }
  // getCurrentPosition(){
  //   return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  // }

  scrollTo(distance) {
    this.document.body.scrollTop = (distance);
    this.document.documentElement.scrollTop = (distance);
  }
//   scrolltoElement(targetPosition) {
//     let currentPosition = this.getCurrentPosition();
//     let position = 0;
//     let distance = targetPosition - position - 50;
//     let duration = 800;
//     let interval = setInterval(()=>{
//       if(position >= distance)
//         return clearInterval(interval);
//
//       let incrementFactor = 0.9;
//
//       position += 10*incrementFactor;
//       this.document.body.scrollTop = currentPosition+position;
//       this.document.documentElement.scrollTop = currentPosition+position;
//       console.log(incrementFactor)
//     },1);
//
//
// }

}
