import { Directive, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[listScrollAnimation]'
})
export class AuditDetailsDirective implements AfterViewInit{

  @HostBinding("style.animation") animation = "";

  @HostListener("window:scroll",['$event'])
  onWindowScroll(event){
    let scrollPosition = event.path[1].scrollY;
    this.checkPosition(scrollPosition);
  }

  private element;
  private tick;
  private position = 0;
  private height = 0;

  constructor( elem:ElementRef) {
    this.element = elem.nativeElement;
  }

  ngAfterViewInit(){
    this.tick = this.element.querySelector(".tick");
    this.position = this.element.offsetTop;
    this.height = this.element.height;
  }

  checkPosition(scrollPosition){
    if(scrollPosition - 150 >= this.position)
      this.animate();
  }

  animate(){
    this.animation = "jumpIn 1s forwards";
    this.tick.style.animation = "draw-tick 2s .5s forwards";
  }
}
