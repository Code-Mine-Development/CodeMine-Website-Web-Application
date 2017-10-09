import {Component, OnInit, ElementRef, HostListener, Inject, HostBinding} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-audit-tick',
  templateUrl: './audit-tick.component.html',
  styleUrls: ['./audit-tick.component.scss']
})
export class AuditTickComponent implements OnInit {

  @HostBinding('class.active') active;

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document) {
  }

  @HostListener('window:scroll', []) onScroll() {
    this.checkVisible()
  }

  ngOnInit() {
    this.checkVisible();
  }


  checkVisible() {
    if (this.getPosition() <= this.getScrollTop()) {
      this.active = true;
    }
  }

  getPosition() {
    let offsetTop = this.element.nativeElement.offsetTop,
      parent = this.element.nativeElement.offsetParent;

    while (parent) {
      offsetTop += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return offsetTop;
  }

  getScrollTop() {
    return (this.document.documentElement.scrollTop || this.document.body.scrollTop) + window.innerHeight * 0.7;
  }
}
