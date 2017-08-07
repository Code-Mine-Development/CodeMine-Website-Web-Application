import {Component, ElementRef} from '@angular/core';
import {ComponentTemplate, registerElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-first-group',
  templateUrl: './first-group.component.html',
  styleUrls: ['./first-group.component.scss']
})
export class FirstGroupComponent extends ComponentTemplate {

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  ngOnInit() {
  }

  animateShow(id, animationEnd){
    setTimeout( animationEnd, 1500 );
  }

  animateHide(id){
    console.log(id);
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.howWeWork" },
      { localId: 2, title:"HOME.language" },
      { localId: 3, title:"HOME.knowledge" }
    ]
  }

}
