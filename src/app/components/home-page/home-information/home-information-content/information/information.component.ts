import {Component, OnInit, Input, ElementRef,} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {ComponentTemplate, registerElement} from '../component.template';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent extends ComponentTemplate {
  @Input('test') test;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  animateHide(id:number){
    console.log("hide",id);
  }

  animateShow(id, cb){
    console.log("hide",id);
    setTimeout( ()=> {
      console.log("animationShow");
      cb();
    }, 1500 )
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"test slogan title" },
      { localId: 2, title:"test title" },
      { localId: 3, title:"test slogan  3333  title" },
    ]
  }

}
