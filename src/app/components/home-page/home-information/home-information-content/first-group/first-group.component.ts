import {Component, ElementRef, HostBinding} from '@angular/core';
import {ComponentTemplate, registerElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-first-group',
  templateUrl: './first-group.component.html',
  styleUrls: ['./first-group.component.scss']
})
export class FirstGroupComponent extends ComponentTemplate {

  @HostBinding('style.transform') transform;
  @HostBinding('style.transition') transition;

  animationFirstSlide = false;
  animationSecondSlide = false;

  private slideDuration = 1500;
  private slides = 3;
  private lineFirst;

  constructor(scrollController: ScrollController, element: ElementRef) {
    super(scrollController, element);
  }

  animateShow(id, animationEnd, directory) {
    this.changeAnimationSection(id, directory);
    setTimeout(animationEnd, 1500);
  }

  animateHide(id) {
  }

  registerElements(): [registerElement] {
    return [
      {localId: 1, title: "HOME.howWeWork"},
      {localId: 2, title: "HOME.language"},
      {localId: 3, title: "HOME.knowledge"}
    ]
  }

  ngAfterViewInit(){
    this.lineFirst = new Vivus('line_first',{start: 'manual', reverseStack: true});
  }

  changeAnimationSection(id, directory){
    this.animateSlides(id);
    this.animateLines(id);
    this.emitAnimations(id, directory)
  }

  emitAnimations(id, directory){
    if(id === 1)
      this.animationFirstSlide = false;
    else if(id === 2){
      if(directory === 'down')
        setTimeout(() => this.animationFirstSlide = true, 1000);
      this.animationSecondSlide = false;
    }
    else if(id === 3 && directory === 'down'){
      setTimeout(() => this.animationSecondSlide = true, 1000);
    }
  }

  animateLines(id){
    if(id === 1){
      this.lineFirst.reset().stop();
    }
    if(id === 2){
      this.lineFirst.play(.5)
    }
    if(id === 3){

    }
  }

  animateSlides(slide) {
    this.transform = 'translateY(-' + 100 / this.slides * (slide - 1) + '%)';
  }

}
