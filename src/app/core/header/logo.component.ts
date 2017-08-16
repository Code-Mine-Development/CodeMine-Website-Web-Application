import { Component, OnChanges, Input, ViewChild, HostListener } from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper">
      <img src="assets/images/logo.png" alt="" [class.hidden]="!logoVisible">
      <div #triangle class="triangle-svg" >
        <svg viewBox="0 0 21.89 25.89">
          <defs>
            <style>.cls-1{fill:#ffdf00;}</style>
          </defs>
          <g id="Layer_one" data-name="layer one">
            <polygon class="cls-1" [class.hidden] = 'homeVisible' [attr.points]="'0 25.86 21.89 25.86 0.05 0'"></polygon>
            <polygon class="cls-1" [class.hidden] = '!homeVisible' [attr.points]="'0 25.86 21.89 25.86 21.89 11 11 0 0 11'"></polygon>
          </g>
        </svg>
      </div>
    </div>
  `,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnChanges {


  @HostListener('mouseenter') mouseEnter(){
    this.homeVisible = true;
    this.checkHomeVisible();
  };
  @HostListener('mouseleave') mouseLeave(){
    this.homeVisible = false;
    this.checkHomeVisible();
  };

  @Input() scrollTop: number;
  @ViewChild('triangle') triangle;

  homeVisible = false;
  logoVisible = false;
  triangleOnPosition = false;
  triangleChangeDirectoryPoint = 500;

  hidden = false;

  constructor( private router:Router, private localize:LocalizeRouterService ) {
    this.checkHomeRoute();
  }

  ngOnChanges(){
    this.opacityAnimation();
    this.triangleAnimation();
  }

  opacityAnimation() {
    this.logoVisible = this.hidden ? false : this.scrollTop < 100;
  }

  triangleAnimation() {
    const targetPosition = [-80, -120],
        scrollTopRatio = this.hidden ? 1 : this.scrollTop / this.triangleChangeDirectoryPoint,
        moveFactor = scrollTopRatio > 1 ? 1 : scrollTopRatio,
        xTranslation = targetPosition[0] * this.EasingFunctions.easeInOutCubic(moveFactor),
        yTranslation = targetPosition[1] * this.EasingFunctions.easeInOutCubic(moveFactor),
        yMultipler = this.parseTriangleAnimationPath(moveFactor),
        angle = this.EasingFunctions.easeInOutCubic(moveFactor) * 360;

    this.triangleOnPosition = scrollTopRatio > 1;
    this.setTriangleTransform(xTranslation, yTranslation * yMultipler, angle);
    this.checkHomeVisible();
  }

  parseTriangleAnimationPath(position: number){
    if (position > 1)
      return 1;
    return position * position;
  }

  setTriangleTransform(x: number, y: number, angle: number){
    if (this.triangle)
      this.triangle.nativeElement.style.transform = `translate(${x}px,${y}px) rotateZ(${angle}deg)`;
  }


  checkHomeVisible(){
    if (!this.triangleOnPosition)
      this.homeVisible = false;
  }


  private EasingFunctions = {
    easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
  }

  checkHomeRoute(){
    this.router.events.subscribe( (state) => {
      if(state instanceof NavigationEnd) {
        let translatedLink = this.localize.translateRoute('/home');
        if( translatedLink !== state.urlAfterRedirects )
          this.hidden = true;
        else
          this.hidden = false;

        this.triangleAnimation();
        this.opacityAnimation();
      }
    })
  }



}
