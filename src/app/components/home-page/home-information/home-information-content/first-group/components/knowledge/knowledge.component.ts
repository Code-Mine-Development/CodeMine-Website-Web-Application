import {Component, AfterViewInit, Input, OnChanges} from '@angular/core';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnChanges, AfterViewInit {

  @Input('animation') animation;
  private svg;
  constructor() { }



  ngOnChanges() {
    if(!this.svg)
      return;

    if(this.animation)
      return this.svg.play();
    return this.svg.reset().stop();
  }

  ngAfterViewInit(){
    this.svg = new Vivus('test_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/wiedza.svg'});
  }

}
