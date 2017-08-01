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
            <polygon class="cls-1" [class.hidden] = 'homeVisible' [attr.points]="'0 25.86 21.89 25.86 0.05 0'"></polygon>
            <polygon class="cls-1" [class.hidden] = '!homeVisible'[attr.points]="'0 25.86 21.89 25.86 21.89 11 11 0 0 11'"></polygon>
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

  constructor(  ) {}

  ngOnChanges(){
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

  check


  checkHomeVisible(){
    if(!this.triangleOnPosition)
      this.homeVisible = false;
  }


  private EasingFunctions = {
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  }


}
