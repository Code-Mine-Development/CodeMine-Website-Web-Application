import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollToService } from '../../../shared/services/scroll-to.service';


@Injectable()
export class ScrollController {

  currentElement = 1;
  $currentElement = new Subject();
  elementsQuantity = 0;
  escapeElement;

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
    this.$currentElement.next(1);
  }

  registerElement(){
    this.elementsQuantity++;
  }





  move(directory){
    this.setScrollDirectory(directory);
  }

  getCurrentElementStream(){
    return this.$currentElement.startWith(this.currentElement);
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
    this.$currentElement.next(this.currentElement);
    this.animationInProgress = true;
  }

  private moveUp(){
    if(this.currentElement === 1)
      return;

    this.currentElement--;
    this.$currentElement.next(this.currentElement);
    this.animationInProgress = true;
  }

  private escapeFromInformations(){
    console.log(this.escapeElement);
    if(this.escapeElement)
      this.scrollToService.scroll(this.escapeElement);
  }

}
