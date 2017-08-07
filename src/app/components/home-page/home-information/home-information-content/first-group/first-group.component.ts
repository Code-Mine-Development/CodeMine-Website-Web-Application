import {Component, ElementRef, HostBinding} from '@angular/core';
import {ComponentTemplate, registerElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';

@Component({
  selector: 'app-first-group',
  templateUrl: './first-group.component.html',
  styleUrls: ['./first-group.component.scss']
})
export class FirstGroupComponent extends ComponentTemplate {

  @HostBinding('style.transform') transform;
  @HostBinding('style.transition') transition;

  animateId:number;

  private slideDuration = 1500;
  private slides = 3;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  ngOnInit() {
  }

  animateShow(id, animationEnd){
    this.animateSlides(id);
    setTimeout( animationEnd, 1500 );
  }

  animateHide(id){
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.howWeWork" },
      { localId: 2, title:"HOME.language" },
      { localId: 3, title:"HOME.knowledge" }
    ]
  }

  animateSlides(slide){
    this.transform = 'translateY(-'+ 100/this.slides * (slide-1) +'%)';
  }

}
