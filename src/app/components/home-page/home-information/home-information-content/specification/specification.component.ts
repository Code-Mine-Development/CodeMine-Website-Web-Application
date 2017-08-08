import {Component, ElementRef, OnInit} from '@angular/core';
import {ComponentTemplate, registerElement} from "../component.template";
import {ScrollController} from "../../../services/scroll.controller";
import * as Vivus from 'vivus';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss']
})
export class SpecificationComponent extends ComponentTemplate{

  private svg;

  constructor( scrollController: ScrollController, element: ElementRef) {
    super( scrollController, element);
  }

  ngAfterViewInit(){
    this.svg = new Vivus('specification_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/specyfikacja.svg'});
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
      { localId: 1, title:"HOME.specification" }
    ]
  }


}
