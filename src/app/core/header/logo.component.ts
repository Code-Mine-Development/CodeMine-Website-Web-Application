import { Component, OnChanges, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper">
      <img src="assets/images/logo.png" alt="" [class.hidden]="hidden">
      <div #triangle class="triangle-svg" >
        <svg viewBox="0 0 21.89 25.89">
          <defs>
            <style>.cls-1{fill:#ffdf00;}</style>
          </defs>
          <g id="Layer_one" data-name="layer one">
            <polygon class="cls-1" [class.hidden] = 'homeVisible' [attr.points]="'0 25.86 25 25.86 0.05 0'"></polygon>
            <polygon class="cls-1" [class.hidden] = '!homeVisible'[attr.points]="'0 25.86 24 25.86 24 11 11 0 0 11'"></polygon>
          </g>
        </svg>
      </div>
    </div>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnChanges {

  @Input() scrollTop:number;
  @ViewChild("triangle") triangle;
  @HostListener("mouseenter") mouseEnter(){
    this.homeVisible = true;
    this.checkHomeVisible();
  };
  @HostListener("mouseleave") mouseLeave(){
    this.homeVisible = false;
    this.checkHomeVisible();
  };

  homeVisible:boolean = false;
  hidden:boolean = false;
  triangleOnPosition:boolean = false;
  triangleChangeDirectoryPoint:number = 500;

  constructor() { }

  ngOnChanges(){
    console.log(this.scrollTop);
    this.opacityAnimation();
    this.triangleAnimation();
  }

  opacityAnimation() {
    this.hidden = this.scrollTop > 100;
  }

  triangleAnimation() {
    let targetPosition = [-80,-120],
        scrollTopRatio = this.scrollTop / this.triangleChangeDirectoryPoint,
        moveFactor = scrollTopRatio > 1 ? 1: scrollTopRatio,
        xTranslation = targetPosition[0]*this.EasingFunctions.easeInOutCubic(moveFactor),
        yTranslation = targetPosition[1]*this.EasingFunctions.easeInOutCubic(moveFactor),
        yMultipler = this.parseTriangleAnimationPath(moveFactor),
        angle = this.EasingFunctions.easeInOutCubic(moveFactor) * 360;

    this.triangleOnPosition = scrollTopRatio > 1;
    this.setTriangleTransform(xTranslation, yTranslation * yMultipler, angle);
    this.checkHomeVisible();
  }

  parseTriangleAnimationPath(position:number){
    if(position > 1)
      return 1;
    return position*position;
  }

  setTriangleTransform(x:number,y:number,angle:number){
    if(this.triangle)
      this.triangle.nativeElement.style.transform = `translate(${x}px,${y}px) rotateZ(${angle}deg)`;
  }

  checkHomeVisible(){
    if(!this.triangleOnPosition)
      this.homeVisible = false;
  }


  private EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
  }


}
