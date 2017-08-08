import {Component, ElementRef, OnInit} from '@angular/core';
import {ScrollController} from "../../../services/scroll.controller";
import {ComponentTemplate, registerElement} from "../component.template";
import * as Vivus from 'vivus';


@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent extends ComponentTemplate {

  private svg;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }


  ngAfterViewInit(){
    this.svg = new Vivus('implementation_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/puzzle.svg'});
  }

  animateHide(id){
  }

  animateShow(id, cb, direction){
    if(direction === 'down')
      this.svg.reset().play(1);

    setTimeout( ()=> {
      cb();
    }, 1500 )
  }
  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.implementation" }
    ]
  }
}

