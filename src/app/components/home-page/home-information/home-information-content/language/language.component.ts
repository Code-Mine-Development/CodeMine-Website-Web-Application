import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ElementRef,
  HostListener, HostBinding
} from '@angular/core';
import * as Vivus from 'vivus';
import {registerElement, ComponentTemplate} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';


@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss']
})
export class LanguageComponent extends ComponentTemplate {

  @HostListener('window:resize', ['$event']) resize(event) {
    this.loadSVG();
    if(this.svg && this.visible) this.svg.setFrameProgress(1);
  }

  @HostBinding('class.horizontal') horizontalClass;
  @HostBinding('class.vertical') verticalClass;

  visible = false;
  mobile;

  private svg;

  private breakPoint = 1050;


  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }


  ngAfterViewInit() {
    this.loadSVG();
  }

  loadSVG(){
    let isMobile = this.checkScreen(),
        file = isMobile ? 'assets/images/home-svg/jezyk-mobile.svg' : 'assets/images/home-svg/jezyk.svg';
    if(isMobile !== this.mobile) {
      if(this.svg) this.cleanSVGBox();
      this.svg = new Vivus('section_2_svg', {type: 'scenario', start: 'manual', file});
    }

    this.mobile = isMobile;
  }

  checkScreen(){
    if(window.innerWidth < window.innerHeight)
      this.horizontalClass = true;
    else
      this.horizontalClass = false;

    return window.innerWidth <= this.breakPoint;
  }

  cleanSVGBox(){
    this.svg.el.remove();
    this.svg.destroy();
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
