import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollToService } from '../../../shared/services/scroll-to.service';

interface InformationElement{
  id:number,
  title:string
}

@Injectable()
export class ScrollController {

  currentElement = 1;
  $currentElement = new Subject();
  elementsQuantity = 0;
  escapeElement;
  title = [];

  animationInProgress = false;

  constructor( private scrollToService:ScrollToService ){}



  setScrollDirectory(directory){
    if(this.animationInProgress)
      return;

    if(directory == "up")
      this.moveUp();
    else
      this.moveDown();
  }

  setEscapeElement(escapeElement){
    this.escapeElement = escapeElement;
  }

  resetElementQuantity(){
    this.elementsQuantity = 0;
    this.currentElement = 1;
    this.$currentElement.next(<InformationElement>{ id: this.currentElement, title: this.title[this.currentElement]});
  }

  registerElement(title:string){
    this.elementsQuantity++;
    this.title[this.elementsQuantity] = title;
    return this.elementsQuantity;
  }


  move(directory){
    this.setScrollDirectory(directory);
  }

  moveToLast(){
    this.currentElement = this.getElementsQuantity();
    this.$currentElement.next(<InformationElement>{ id: this.currentElement, title: this.title[this.currentElement]});
    this.animationInProgress = true;
  }

  getCurrentElementStream(){
    return this.$currentElement.startWith(<InformationElement>{ id: this.currentElement, title: this.title[this.currentElement]});
  }

  getElementsQuantity(){
    return this.elementsQuantity;
  }

  animationEnd(){
    this.animationInProgress = false;
  }



  private moveDown(){
    if(this.currentElement === this.elementsQuantity)
      return this.escapeFromInformations();

    this.currentElement++;
    this.$currentElement.next(<InformationElement>{ id: this.currentElement, title: this.title[this.currentElement]});
    this.animationInProgress = true;
  }

  private moveUp(){
    if(this.currentElement === 1)
      return;

    this.currentElement--;
    this.$currentElement.next(<InformationElement>{ id: this.currentElement, title: this.title[this.currentElement]});
    this.animationInProgress = true;
  }

  private escapeFromInformations(){
    if(this.escapeElement)
      this.scrollToService.scroll(this.escapeElement);
  }

}
