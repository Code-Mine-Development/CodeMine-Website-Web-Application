import {Component, ElementRef} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {ComponentTemplate} from '../component.template';

@Component({
  selector: 'app-cta-to-form',
  templateUrl: './cta-to-form.component.html',
  styleUrls: ['./cta-to-form.component.scss']
})
export class CtaToFormComponent extends ComponentTemplate {

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController,scrollController.getElementsQuantity()+1, element);
  }

  animateHide(){
    setTimeout( ()=> {
      console.log("animationHide")
    }, 1500 )
  }

  animateShow(cb){
    setTimeout( ()=> {
      console.log("animationShow");
      cb();
    }, 1500 )
  }
}
