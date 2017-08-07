import {Component, OnInit, AfterViewInit} from '@angular/core';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit, AfterViewInit {

  constructor() { }

  private vivus;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.vivus = new Vivus('test_svg_draw', {type:'scenario', file: 'assets/images/home-svg/2.svg'}, (test)=> console.log("test",test));
  }

  animate(){
    this.vivus.reset();
    this.vivus.play();
  }

}
