import {Component, OnInit, ElementRef} from '@angular/core';
import {ComponentTemplate} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-slogan-section',
  template: `
      <h2 >{{ 'HOME.motto.title' | translate}} <br> {{ 'HOME.motto.subtitle' | translate}}</h2>
    
  `,
  styles: [`
    :host{
      position:absolute;
      width:100%;
      height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
  `]
})
export class SloganSectionComponent extends ComponentTemplate{
  constructor( scrollController:ScrollController, element:ElementRef) {
    scrollController.resetElementQuantity();
    super( scrollController, 1, element);

  }

  animateHide(){
    setTimeout( ()=> {
      console.log("animationHide")
    }, 500 )
  }

  animateShow(cb){
    setTimeout( ()=> {
      console.log("animationShow");
      cb();
    }, 500 )
  }
}
