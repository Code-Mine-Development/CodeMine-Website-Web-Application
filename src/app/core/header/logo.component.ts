import {Component, OnChanges, Input, ViewChild, HostListener} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper">
      <img src="assets/images/logo.png" alt="" [class.hidden]="!logoVisible">
      <div #triangle class="triangle-svg" [class.animate-logo]="!logoVisible">
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

  @Input() scrollTop: number;
  @ViewChild('triangle') triangle;

  homeVisible = false;
  logoVisible = false;

  hidden = false;

  constructor(private router: Router, private localize: LocalizeRouterService) {
    this.checkHomeRoute();
  }

  @HostListener('mouseenter') mouseEnter() {
    this.homeVisible = true;
    this.checkHomeVisible();
  };

  @HostListener('mouseleave') mouseLeave() {
    this.homeVisible = false;
    this.checkHomeVisible();
  };

  ngOnChanges() {
    this.logoAnimation();
  }

  logoAnimation() {
    this.logoVisible = this.hidden ? false : this.scrollTop < 100;
  }


  checkHomeVisible() {
    if (this.logoVisible){
      this.homeVisible = false;
    }
  }


  checkHomeRoute() {
    this.router.events.subscribe((state) => {
      if (state instanceof NavigationEnd) {

        const translatedLink = this.localize.translateRoute('/home');

        if (translatedLink !== state.urlAfterRedirects){
          this.hidden = true;
        } else {
          this.hidden = false;
        }
        this.logoAnimation();
      }
    })
  }


}
