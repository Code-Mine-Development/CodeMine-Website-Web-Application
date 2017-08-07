import {Component, ElementRef} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {ComponentTemplate, registerElement} from '../component.template';

@Component({
  selector: 'app-cta-to-form',
  templateUrl: './cta-to-form.component.html',
  styleUrls: ['./cta-to-form.component.scss']
})
export class CtaToFormComponent extends ComponentTemplate {

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  animateHide(id:number){
    console.log("hide",id);
  }

  animateShow(id, cb){
    console.log("show",id);
    setTimeout( ()=> {
      cb();
    }, 1500 )
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"test slogan title" }
    ]
  }
}
