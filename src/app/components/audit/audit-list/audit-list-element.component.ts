import {Component, HostBinding, HostListener, ElementRef, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-list-element',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.41 12.03">
     <polyline class="tick" points=" 0.71 4.53 6.8 10.62 16.71 0.71"/>
    </svg>
    {{ (source === 0 ? item.task : item.benefit) | translate }}
  `,
  styles: [`
    @keyframes jumpIn {
        0%{
          opacity: 0;
        }
        50%{
          opacity: .5;
        }
        to{
          opacity: 1;
        }
      }
    :host{
        width: 100%;
        margin: 10px 0;
        display: inline-flex;
        position: relative;
        opacity:0;
        font-size: 1.5em;
        font-weight: 700;
        box-sizing: border-box;
        padding: 0 40px 0 60px ;
      }
     .tick {
        fill:none;
        stroke:#000;
        stroke-miterlimit:10;
        stroke-width:2px;
      }
        svg{
          position: absolute;
          left:18.5px;
          top: 0;
          height: 16px;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

      @keyframes draw-tick {
        0% {
          stroke-dashoffset: 100; }
        100% {
          stroke-dashoffset: 0; }
        }

  `]

})
export class AuditListElementComponent implements AfterViewInit {
  @Input() source: number;
  @Input() item;
  @HostBinding('style.animation') animation = '';

  private tick;
  private position = 0;
  private height = 0;
  private element;

  constructor(elem: ElementRef) {
    this.element = elem.nativeElement;
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const scrollPosition = window.pageYOffset,
      activateLevel = window.innerHeight * 0.9;
    this.checkPosition(scrollPosition + activateLevel);
  }

  ngAfterViewInit() {
    this.tick = this.element.querySelector('.tick');
    this.position = this.parsePosition();
    this.height = this.element.height;
  }

  parsePosition() {
    let offset = this.element.offsetTop,
      parent = this.element.offsetParent;

    while (parent) {
      offset += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return offset;
  }

  checkPosition(scrollPosition) {
    if (scrollPosition >= this.position) {
      this.animate();
    }
  }

  animate() {
    this.animation = 'jumpIn 1s forwards';
    this.tick.style.animation = 'draw-tick 2s .5s forwards';
  }
}
