import {Component, ElementRef} from '@angular/core';
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
  visible = false;

  constructor( scrollController: ScrollController, element: ElementRef) {
    super( scrollController, element);
  }

  ngAfterViewInit(){
    this.svg = new Vivus('specification_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/specyfikacja.svg'});
  }

  animateHide(id, direction){
    if(direction === 'up')
      setTimeout( () => this.visible = false, 1000 );
  }

  animateShow(id, cb, direction){
    if(direction === 'up' && !this.visible)
      this.svg.setFrameProgress(1);
    this.visible = true;
    if(direction === 'down')
    {
      this.svg.reset().stop();
      setTimeout(()=>this.svg.play(1.5), 1000);
    }


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