import {ScrollController} from '../../services/scroll.controller';
import {ElementRef, OnDestroy} from '@angular/core';

export interface registerElement{
  localId:number,
  title:string
}

interface localRegisterElement{
  id:number,
  localId:number,
  title:string
}

export abstract class ComponentTemplate implements OnDestroy {

  private duration = 1500;
  private prevElement;
  private streamSubscriber;
  private localRegisteredList:[localRegisterElement] = <[localRegisterElement]>new Array();
  private isVisible = false;

  constructor( private scrollController:ScrollController, private element:ElementRef ){
    this.localRegisterElements();
    this.streamSubscriber = scrollController.getCurrentElementStream().subscribe(
      (index:any) => this.parseCurrentElement(index.id)
    )
  }

  ngOnDestroy(){
    if(this.streamSubscriber)
      this.streamSubscriber.unsubscribe();
  }

  private localRegisterElements(){
    let elementsList = this.registerElements();

      elementsList.forEach(
        (localRegister)=>{
          let id = this.scrollController.registerElement(localRegister.title);
          this.localRegisteredList.push({
            id,
            title:localRegister.title,
            localId: localRegister.localId
          })
        }
      );
  }

  private parseCurrentElement(index){
    let elementIndex = this.localRegisteredList.find( (element:localRegisterElement) => (element.id === index)),
        prevIndex = this.localRegisteredList.find( (element:localRegisterElement) => (element.id === this.prevElement));


    if(elementIndex) {
      this.show(elementIndex.localId)
      if(prevIndex)
        this.hide(prevIndex.localId)
      else
        this.sliteToShow();
    }
    else if( prevIndex )
      this.checkHideDirectory(index);

    console.log(elementIndex,prevIndex);

    this.isVisible = elementIndex ? true : false;
    this.prevElement = index;
  }

  private checkHideDirectory(index){

    if(index > this.prevElement)
      this.slideUp();
    else
      this.slideDown()

    this.hide(this.prevElement);
  }

  private show(id){
    this.animateShow( id, ()=>{ this.scrollController.animationEnd() })
  }

  private hide(id){
    this.animateHide( id );
  }

  private sliteToShow(){
    this.element.nativeElement.style.transition = 'all '+this.duration+'ms ease-in-out';
    this.element.nativeElement.style.top = "0";
  }

  private slideUp(){
    this.element.nativeElement.style.transition = 'all '+this.duration+'ms ease-in-out';
    this.element.nativeElement.style.top = "-100%";
  }

  private slideDown(){
    this.element.nativeElement.style.transition = 'all '+this.duration+'ms ease-in-out';
    this.element.nativeElement.style.top = "100%";
  }

  abstract animateShow(id, callback);
  abstract animateHide(id);
  abstract registerElements():[registerElement];


}
