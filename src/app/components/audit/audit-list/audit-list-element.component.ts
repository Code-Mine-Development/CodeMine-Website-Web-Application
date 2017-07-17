import { Component, HostBinding, HostListener, ElementRef, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-list-element]',
  template: `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path class="tick" d="M1 25l14 14L47 7"/>
    </svg>
    {{ (source == 0 ? item.task : item.benefit) | translate }}
  `,
  styles:[`
    @keyframes jumpIn {
        0%{
          opacity: 0;
          bottom:-20px
        }
        50%{
          opacity: .5;
          bottom: 20px;
        }
        to{
          opacity: 1;
          bottom: 0;
        }
      }
    :host{
        width: 80%;
        margin:0 auto;
        display: inline-flex;
        position: relative;
        opacity:0;
        font-size: 1.5em;
      }
     .tick {
        fill:none;
        stroke:#000;
        stroke-width:4px;
      }
        svg{
          position: absolute;
          left: -16%;
          top: -15px;
          height: 40px;
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
export class AuditDetailsDirective implements AfterViewInit{
  @Input() source:number;
  @Input() item;

  @HostBinding("style.animation") animation = "";

  // private element;
  @HostListener("window:scroll",['$event'])
  onWindowScroll(event){
    let scrollPosition = window.pageYOffset,
        activateLevel = window.innerHeight * 0.9;
    this.checkPosition(scrollPosition + activateLevel);
  }
  private tick;
  private position = 0;
  private height = 0;
  private element;

  constructor(elem:ElementRef) {
    this.element = elem.nativeElement;
  }

  ngAfterViewInit(){
    this.tick = this.element.querySelector(".tick");
    this.position = this.parsePosition();
    this.height = this.element.height;
  }

  parsePosition(){
    let offset = this.element.offsetTop,
        parent = this.element.offsetParent

    while(parent){
      offset+= parent.offsetTop;
      parent = parent.offsetParent;
    }
    return offset;
  }

  checkPosition(scrollPosition){
    if(scrollPosition >= this.position)
      this.animate();
  }

  animate(){
    this.animation = "jumpIn 1s forwards";
    this.tick.style.animation = "draw-tick 2s .5s forwards";
  }
}
