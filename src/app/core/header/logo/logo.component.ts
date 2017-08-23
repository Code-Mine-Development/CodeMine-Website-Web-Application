import {Component, OnChanges, Input, ViewChild, HostListener, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper">
      <img src="assets/images/logo.png" alt="" [class.hidden]="!logoVisible">
      <div class="triangle-svg" [class.animate-logo]="!logoVisible">
        <svg viewBox="0 0 25 25">
          <defs>
            <style>.cls-1{fill:#ffdf00;}</style>
          </defs>
          <polygon class="cls-1" [class.hidden] = 'homeVisible' [attr.points]="'0,25 25,25 0,0'"></polygon>
          <polygon class="cls-1" [class.hidden] = '!homeVisible' [attr.points]="'0,10 0,25 25,25 25,10 12.5,0'"></polygon>
        </svg>
      </div>
    </div>
  `,
  styleUrls: ['logo.component.scss']
})
export class LogoComponent implements OnChanges {

  @Input() scrollTop: number;

  homeVisible = false;
  logoVisible = false;

  hidden = false;

  constructor(private router: Router, private localize: LocalizeRouterService, private detect: ChangeDetectorRef) {
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
    this.homeVisible = false;
    this.logoVisible = this.hidden ? false : this.scrollTop < 100;
    this.checkHomeVisible();
  }


  checkHomeVisible() {
    if (this.logoVisible) {
      this.homeVisible = false;
    }
  }


  checkHomeRoute() {
    this.router.events.subscribe((state) => {
      if (state instanceof NavigationEnd) {

        const translatedLink = this.localize.translateRoute('/home');

        if (translatedLink !== state.urlAfterRedirects) {
          this.hidden = true;
        } else {
          this.hidden = false;
        }

        this.logoAnimation();
      }
    })
  }


}
