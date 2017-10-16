import {Component, OnChanges, Input, HostListener} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-logo',
  template: `
    <div class="wrapper" [class.hidden]="!logoVisible">
      <img src="assets/images/small_logo.svg" alt="CM">
      <div class="triangle-svg">
        <svg viewBox="0 0 25 25">
          <polygon fill="#FFDE07" [class.hidden] = 'homeVisible' [attr.points]="'0,25 25,25 0,0'"></polygon>
          <polygon fill="#FFDE07" [class.hidden] = '!homeVisible' [attr.points]="'0,10 0,25 25,25 25,10 12.5,0'"></polygon>
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
    this.homeVisible = false;
    this.logoVisible = this.hidden ? this.scrollTop > 100 : true;
    this.checkHomeVisible();
  }


  checkHomeVisible() {
    if (this.hidden) {
      this.homeVisible = false;
    }
  }


  checkHomeRoute() {
    this.router.events.subscribe((state) => {
      if (state instanceof NavigationEnd) {
        const translatedLink = this.localize.translateRoute('/home');

        if (translatedLink !== state.urlAfterRedirects) {
          this.hidden = false;
        } else {
          this.hidden = true;
        }

        this.logoAnimation();
      }
    })
  }


}
