import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper">
      <img src="../assets/images/logo.png" alt="" [ngStyle]="{'opacity':opacity, 'visibility': opacity == 0 ? 'hidden': 'visible'}">
      <div #triangle class="triangle-svg" >
        <svg viewBox="0 0 21.89 25.89">
          <defs>
            <style>.cls-1{fill:#ffdf00;}</style>
          </defs>
          <g id="Layer_one" data-name="layer one">
            <polygon class="cls-1" [attr.points]="'0 25.86 25 25.86 0.05 0'"></polygon>
            <!--<polygon class="cls-1" [attr.points]="'0.05 25.86  16.05 25.86 16.05 16.86 8.05 9.86 0.05 16.86'"></polygon>-->
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
  opacity:number = 1;
  logoInvisiblePoint:number = 295;
  triangleChangeDirectoryPoint:number = 500;

  constructor() { }

  ngOnChanges(){
    this.opacityAnimation();
    this.triangleAnimation();
  }

  opacityAnimation() {
    let opacity = 1 - (this.scrollTop / this.logoInvisiblePoint);
    this.opacity = opacity < 0 ? 0 : opacity;
  }

  triangleAnimation() {
    let targetPosition = [-80,-120],
        moveFactor = this.scrollTop / this.triangleChangeDirectoryPoint,
        xTranslation = moveFactor > 1 ? targetPosition[0] : targetPosition[0]*this.EasingFunctions.easeInOutCubic(moveFactor),
        yTranslation = moveFactor > 1 ? targetPosition[1] : targetPosition[1]*this.EasingFunctions.easeInOutCubic(moveFactor);

    this.setTriangleTransformTranslate(xTranslation,yTranslation);
  }

  setTriangleTransformTranslate(x:number,y:number){
    if(this.triangle)
      this.triangle.nativeElement.style.transform = `translate(${x}px,${y}px)`;
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
