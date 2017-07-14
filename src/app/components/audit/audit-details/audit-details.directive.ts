import { Directive, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[listScrollAnimation]'
})
export class AuditDetailsDirective implements AfterViewInit{

  @HostBinding("style.animation") animation = "";

  @HostListener("window:scroll",['$event'])
  onWindowScroll(event){
    let scrollPosition = event.path[1].scrollY,
        activateLeavel = event.path[1].innerHeight * 0.9;
    this.checkPosition(scrollPosition + activateLeavel);
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
