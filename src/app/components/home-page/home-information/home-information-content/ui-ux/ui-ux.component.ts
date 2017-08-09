import {Component, ElementRef, OnInit} from '@angular/core';
import {ComponentTemplate, registerElement} from "../component.template";
import {ScrollController} from "../../../services/scroll.controller";

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UiUxComponent extends ComponentTemplate {

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  ngAfterViewInit(){

  }

  animateHide(id){

  }

  animateShow(id, cb){
    setTimeout( ()=> {
      cb();
    }, 1500 )
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.UX" },
      { localId: 2, title:"HOME.UI" }
    ]
  }
}
