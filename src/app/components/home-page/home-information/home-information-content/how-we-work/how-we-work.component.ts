import {Component, OnInit, ElementRef} from '@angular/core';
import {ComponentTemplate, registerElement} from '../component.template';
import {ScrollController} from '../../../services/scroll.controller';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-how-we-work',
  template: `
     <article>
      <h1>{{'HOME.howWeWork.title' | translate}}</h1>
      <p>{{'HOME.howWeWork.description' | translate}}</p>
     </article>
     <div class="background">
       <svg class="line" id="line_first">
          <line x1="0" y1="0" x2="0" y2="1500" stroke="#000000" stroke-width="6px"></line>
       </svg>
     </div>
  `,
  styles: [`
    :host{
      height: 85vh;
      width:100%;
      display:flex;
      position:relative;
     }
      
  
    article{
      position:relative;
      z-index: 25;
      width:50%;
      margin:auto;
      background: #f2f2f2;
      box-sizing: border-box;
      text-align: center;
      padding:60px 60px;
      box-shadow: 10px 20px 50px RGBA(161,161,161,0.35);
    }
    h1{
      margin:0 0 20px;
      font-size:4.8rem;
    }
    p{
      font-weight: 700;
      font-size: 2.4rem;
      word-break: normal;
      margin:0;
    }
    .background{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height: 170vh;
    }
    .line{
      position:absolute;
      z-index: 24;
      left:50%;
      top:25%;
      width:7px;
      height:50%;
    }
  `]
})
export class HowWeWorkComponent extends ComponentTemplate{

  private svg;

  constructor( scrollController:ScrollController, element:ElementRef) {
    super( scrollController, element);
  }

  ngAfterViewInit(){
    this.svg = new Vivus('line_first',{ start:'manual' })
  }


  animateHide(id:number, directory){
    if(directory === "down"){
      this.svg.reset().play(.7);
    }
  }

  animateShow(id, cb, directory){
    setTimeout( ()=> {
      cb();
    }, 1500 )
  }

  registerElements():[registerElement]{
    return [
      { localId: 1, title:"HOME.howWeWork" }
    ]
  }
}
