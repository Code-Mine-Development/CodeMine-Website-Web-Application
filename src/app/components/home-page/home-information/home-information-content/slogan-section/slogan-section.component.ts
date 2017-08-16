import {Component, OnInit, ElementRef} from '@angular/core';
import {ComponentTemplate, registerElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-slogan-section',
  template: `
      <h2 >{{ 'HOME.motto.title' | translate}} <br> {{ 'HOME.motto.subtitle' | translate}}</h2>
    
  `,
  styleUrls: ['./slogan-section.component.scss']
})
export class SloganSectionComponent extends ComponentTemplate{
  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  ngAfterViewInit(){

  }


  animateHide(id:number){
  }

  animateShow(id, cb){
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