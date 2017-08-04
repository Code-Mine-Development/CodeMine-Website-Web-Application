import {ScrollController} from '../../services/scroll.controller';
import {ElementRef, OnDestroy} from '@angular/core';


export abstract class ComponentTemplate implements OnDestroy {

  private duration = 500;
  private prevElement;
  private streamSubscriber;

  constructor( private scrollController:ScrollController, private elementIndex:number, private element:ElementRef ){
    scrollController.registerElement();
    this.streamSubscriber = scrollController.getCurrentElementStream().subscribe(
      (index) => this.parseCurrentElement(index)
    )
  }

  ngOnDestroy(){
    if(this.streamSubscriber)
      this.streamSubscriber.unsubscribe();
  }

  private parseCurrentElement(index){
    if(index === this.elementIndex)
      this.show()
    else if( this.prevElement === this.elementIndex )
      this.checkHideDirectory(index);

    this.prevElement = index;
  }

  private checkHideDirectory(index){
    if(index > this.prevElement)
      this.slideUp();
    else
      this.slideDown()
    this.hide();
  }

  private show(){
    this.element.nativeElement.style.transition = 'top '+this.duration+'ms';
    this.element.nativeElement.style.top = "0";
    this.animateShow( ()=>{ this.scrollController.animationEnd() })
  }

  private hide(){
    this.animateHide();
  }


  private slideUp(){
    this.element.nativeElement.style.transition = 'top '+this.duration+'ms';
    this.element.nativeElement.style.top = "-100%";
  }

  private slideDown(){
    this.element.nativeElement.style.transition = 'top '+this.duration+'ms';
    this.element.nativeElement.style.top = "100%";
  }

  abstract animateShow(callback);
  abstract animateHide();


}
