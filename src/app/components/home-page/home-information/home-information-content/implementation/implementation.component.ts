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
  private visible = false;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }


  ngAfterViewInit(){
    this.svg = new Vivus('implementation_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/puzzle.svg'});
  }

  animateHide(id, direction){
    if(direction === 'up')
      setTimeout( () => this.visible = false, 1000 );
  }

  animateShow(id, cb, direction){
    this.visible = true;
    if(direction === 'down') {
      this.svg.reset().stop();
      setTimeout(()=>this.svg.play(1), 1000);
    }

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

