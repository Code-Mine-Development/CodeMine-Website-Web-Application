import {Component, OnInit, ElementRef, HostListener, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {ComponentTemplate, RegisterElement} from '../component.template';
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
       <svg xmlns="http://www.w3.org/2000/svg"  class="line" id="line_first" viewBox="0 0 400 600">
          <g isolation = 'isolate' [class.hidden]="mobile">
             <line class="curve_line"  x1="200.5" y1="0" x2="200.5" y2="600" ></line>
          </g>
       </svg>
       <svg class="bg-triangle" viewBox="0 0 100 100">
          <polygon fill="#ffdf01" points="0 0 100 100 0 100"></polygon>
       </svg>
     </div>
  `,
  styles: [`
    :host{
      height: 85vh;
      width:100%;
      display:flex;
      flex-wrap: wrap;
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
    #line_first{
      position:absolute;
      z-index: 24;
      left:0%;
      top:25%;
      width:100%;
      height:45%;
    }


    .bg-triangle{
      position:absolute;
      z-index: 20;
      bottom:0;
      left:0;
      width:100%;
      display:flex;
      align-items: flex-end;
    }
    .curve_line{
      stroke-miterlimit: 10;
      stroke:#000000;
      fill:none;
      stroke-width: 2px;
    }
    .hidden{
      display:none;
    }
    @media screen and (min-width: 1280px){
        .curve_line{
          stroke-width: 3px;
        }
    }
    @media screen and (max-width: 1050px){
      article{
        width:80%;
      }
    }
    @media screen and (max-width: 500px){
      article{
        padding: 20px 20px;
      }
      h1{
        font-size: 3.6rem;
      }
      p{
        font-size: 1.6rem;
        padding:0 5%;
      }
    }
    @media only screen and (max-width: 800px) and (max-height: 500px){
      h1{
        font-size:3.6rem;
      }
      p{
        font-size:1.6rem;
      }
      article{
        padding: 10px 60px 20px;
      }
    }

  `]
})
export class HowWeWorkComponent extends ComponentTemplate implements AfterViewInit {


  private svg;
  private breakPoint = 1050;
  mobile = false;

  constructor(scrollController: ScrollController, element: ElementRef, private chengeDetector: ChangeDetectorRef) {
    super(scrollController, element);
  }

  @HostListener('window:resize', ['$event']) resize(event) {
    this.checkScreen();
  }

  ngAfterViewInit() {
    this.svg = new Vivus('line_first', {start: 'manual'});
    this.checkScreen();
  }

  checkScreen() {
    this.mobile = window.innerWidth <= this.breakPoint;
    this.chengeDetector.detectChanges()
  }

  animateHide(id: number, directory) {
    if (directory === 'down') {
      this.svg.reset().play(this.mobile ? 1.6 : 1);
    }
  }

  animateShow(id, cb, directory) {
    setTimeout(() => {
      cb();
    }, 1500)
  }

  registerElements(): [RegisterElement] {
    return [
      {localId: 1, title: 'HOME.howWeWork'}
    ]
  }
}
