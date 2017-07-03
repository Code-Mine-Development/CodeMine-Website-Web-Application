import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  navigation = [
    'o nas',
    'portfolio',
    'offer',
    'audit',
    'contact',
  ];
  switchLang: string = 'en';
  scrollTop: number;
  opacity: number;

  headerAnim: boolean = false;
  borderAnim: boolean = false;
  translateY: number;
  translateX: number;
  move: string;

  homeLeftWall: string;
  homeLeftWallAnim: number;
  homeLeft: string;
  homeLeftWallCalculate: number;

  homeRightWall: string;
  homeRightWalAnim: number;
  homeRight: string;
  homeRightWalCalculate: number;

  homeRoof: string;
  homeUpRoof: string;
  homeRoofAnim: number;
  homeRoofCalculate: number;

  readyRightWall: boolean = false;
  readyLeftWall: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
  }

  ngOnInit() {
    this.prepareHomeWall();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollTop = this.document.body.scrollTop;
    this.translateX = 0;
    this.XYanimation();
    this.homeLeftWallAnimation();
    this.homeRightWallAnimation();
    this.homeRoofAnimation();
    this.borderAnimation();
    this.headerAnimation();
    this.opacityAnimation();
    this.move = 'translateX(' + this.translateX + 'px) translateY(' + this.translateY + 'px)';
  }

  opacityAnimation() {
    this.opacity = -((this.scrollTop - 295) / 295);
    if (this.opacity > 1) {
      this.opacity = 1;
    } else if (this.opacity < 0) {
      this.opacity = 0;
    }
  }

  XYanimation() {
    if (this.scrollTop > 300) {
      this.translateX = -((this.scrollTop - 300) * 0.25);
      if (this.translateX < -80) {
        this.translateX = -80;
      }
    }
    this.translateY = -(this.scrollTop * 0.41);
    if (this.translateY < -117) {
      this.translateY = -117;
    }
    if (this.scrollTop < 1) {
      this.homeLeft = '0.05 10.86 0.05 25.86 16.87 25.86 0.05 9.86';
    }
  }

  headerAnimation() {
    if (this.scrollTop > 285) {
      this.headerAnim = true;
    } else {
      this.headerAnim = false;
    }
  }

  borderAnimation() {
    if (this.scrollTop > 305) {
      this.borderAnim = true;
    } else {
      this.borderAnim = false;
    }
  }

  prepareHomeWall() {
    this.homeLeftWall = '9.86';
    this.homeRightWall = '0.00';
    this.homeUpRoof = '9.95';
    this.homeLeft = '0.05 10.86 0.05 25.86 16.87 25.86 0.05 ' + this.homeLeftWall + ' ';
    this.homeRight = '16.89 25.89 ' + this.homeRightWall + ' 14.88 0.00 15.00 25.00 31.89';
    this.homeRoof = '16.88 9.94 8.94 ' + this.homeUpRoof + ' 0 9.94 16.88 9.94';
  }

  homeLeftWallAnimation() {
    this.homeLeftWall = '9.86';
    if (this.scrollTop > 200 && this.scrollTop !== 0) {
      this.homeLeftWallAnim = (this.scrollTop - 200) / 20;
      this.homeLeftWallCalculate = parseInt(this.homeLeftWall, 10) + this.homeLeftWallAnim;
      this.homeLeftWall = this.homeLeftWallCalculate.toString();
      if (this.homeLeftWallCalculate < 14.57) {
        this.homeLeft = '0.05 10.86 0.05 25.86 16.87 25.86 0.05 ' + this.homeLeftWall;
      }
      if (this.homeLeftWallCalculate > 14.57) {
        this.readyLeftWall = true;
        this.homeLeft = '0.05 10.86 0.05 25.86 16.87 25.86 0.05 14.57';
      }
    }
  }

  homeRightWallAnimation() {
    this.homeRightWall = '0.00';
    if (this.readyLeftWall === true) {
      this.homeRightWalAnim = (this.scrollTop - 300) / 10;
      this.homeRightWalCalculate = parseInt(this.homeRightWall, 10) + this.homeRightWalAnim;
      this.homeRightWall = this.homeRightWalCalculate.toString();
      if (this.homeRightWalCalculate < 16.98) {
        this.homeRight = '16.89 25.89 ' + this.homeRightWall + ' 14.88 0.00 15.00 25.00 31.89';
      }
      if (this.homeRightWalCalculate > 16.98) {
        this.readyRightWall = true;
        this.homeRight = '16.89 25.89 16.85 14.88 0.00 15.00 25.00 31.89';
      }
    }
  }

  homeRoofAnimation() {
    this.homeUpRoof = '9.95';
    if (this.readyRightWall === true) {
      this.homeRoofAnim = (this.scrollTop - 475) / 10;
      this.homeRoofCalculate = parseInt(this.homeUpRoof, 10) - this.homeRoofAnim;
      this.homeUpRoof = this.homeRoofCalculate.toString();
      if (this.homeRoofCalculate > 0) {
        this.homeRoof = '16.88 9.94 8.94 ' + this.homeUpRoof + ' 0 9.94 16.88 9.94';
      }
      if (parseInt(this.homeUpRoof, 10) > 9.95) {
        this.homeRoof = '16.88 9.94 8.94 9.95 0 9.94 16.88 9.94';
      }
      if (this.scrollTop > 560) {
        this.homeRoof = '16.88 9.94 8.94 0.00 0 9.94 16.88 9.94';
      }
    }
  }
}
