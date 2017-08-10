import {Component, ElementRef, OnInit} from '@angular/core';
import {ComponentTemplate, registerElement} from "../component.template";
import {ScrollController} from "../../../services/scroll.controller";
import * as Vivus from 'vivus';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent extends ComponentTemplate {

  private svg;
  private visible = false;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }


  ngAfterViewInit(){
    this.svg = new Vivus('support_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/parasol.svg'});
  }

  animateHide(id, direction){
    if(direction === 'up')
      setTimeout( () => this.visible = false, 1000 );
  }

  animateShow(id, cb, direction){
    if(direction === 'up' && !this.visible)
      this.svg.setFrameProgress(1);

    if(direction === 'down')
    {
      this.svg.reset().stop();
      setTimeout(()=>this.svg.play(1.5), 1000);
    }

    setTimeout( ()=> {
      cb();
    }, 1500 );

    this.visible = true;
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.support" }
    ]
  }
}

