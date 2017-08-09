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
  private visible = false;
  constructor() { }



  ngOnChanges() {
    if(!this.svg)
      return;

    if(this.animation) {
      this.visible = true;
      return this.svg.play();
    }
    this.visible = false;
    setTimeout( ()=>this.svg.reset().stop(), 300)

  }

  ngAfterViewInit(){
    this.svg = new Vivus('test_svg_draw', {type: 'scenario', file: 'assets/images/home-svg/wiedza.svg'});
  }

}
