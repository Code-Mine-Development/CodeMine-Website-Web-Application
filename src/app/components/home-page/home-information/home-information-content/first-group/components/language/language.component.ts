import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import * as Vivus from 'vivus';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements AfterViewInit, OnChanges {

  @Input() animation;

  private svg;

  constructor() { }

  ngAfterViewInit() {
    this.svg = new Vivus('section_2_svg', {type: 'scenario', start: 'manual', file: 'assets/images/home-svg/jezyk.svg'})
  }

  ngOnChanges(){
    if(!this.svg)
      return;

    if (this.animation)
      return this.svg.play(1);
    this.svg.reset().stop();
  }

  animate(){
    this.svg.reset().play(1);
  }

}
