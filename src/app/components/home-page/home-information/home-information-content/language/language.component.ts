import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ElementRef} from '@angular/core';
import * as Vivus from 'vivus';
import {registerElement, ComponentTemplate} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';
@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss']
})
export class LanguageComponent extends ComponentTemplate {

  private svg;
  private visible = false;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }


  ngAfterViewInit() {
    this.svg = new Vivus('section_2_svg', {type: 'scenario', start: 'manual', file: 'assets/images/home-svg/jezyk.svg'})
  }

  animateHide(id, direction){
    if(direction === 'up')
      setTimeout( () => this.visible = false, 1000 );
  }

  animateShow(id, cb, direction){
    if(direction === 'up' && !this.visible)
      this.svg.setFrameProgress(1);
    this.visible = true;
    if(direction === 'down') {
      this.svg.reset().stop();
      setTimeout(()=>this.svg.play(1.5), 1000);
    }

    setTimeout( ()=> {
      cb();
    }, 1500 )
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.language" }
    ]
  }

}
