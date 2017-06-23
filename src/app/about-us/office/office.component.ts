import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import { trigger,state,style,transition,animate} from '@angular/animations'

interface SmoothMove{
  lFollowX: number,
  lMouseX:number,
  lFollowY:number,
  lMouseY:number,
  x:number,
  y:number,
  friction:number,
  translate:string
}

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
  animations:[
      trigger('arrow',[
        state('down', style({
          'font-size':'15px',
          'transform': 'translateY(0)'
        })),
        state('up', style({
          'font-size':'17px',
          'transform': 'translateY(-5px)'
        })),

        transition('down <=> up', animate(800)),
      ])
  ]
})
export class OfficeComponent implements OnInit, OnDestroy{
  state: string = 'normal';
  topOffset: number = document.querySelector('header')['offsetHeight'];
  windowWidth: number = window.innerWidth;
  arrowInterval: any;
  smoothMove:SmoothMove = {
    lFollowX: 0,
    lMouseX: 0,
    lFollowY: 0,
    lMouseY: 0,
    x:0,
    y:0,
    friction: 1 / 30,
    translate:'0px'
  };


  constructor(ngZone:NgZone) {
    window.onresize = () =>
    {
      ngZone.run(() => {
        this.windowWidth = window.innerWidth;
      });
    };
  }

  ngOnInit() {
    this.restyleElement(['header','body'],['color','overflow'], ['white','hidden']);
    this.smoothMoveAnimation(this.smoothMove);
  }

  /**
   *
   * register translateXY of moving
   * @param data
   */
  smoothMoveAnimation(data:SmoothMove):void{
    data.x += (data.lFollowX - data.x) * data.friction;
    data.y += (data.lFollowY - data.y) * data.friction;
    data.translate = 'translate(' + data.x + 'px, ' + data.y + 'px) scale(1.1)';

  }

  /**
   *
   * detect mouse move event
   * @param event
   */
  mouseMove(event):void{
    const data = this.smoothMove;
    data.lMouseX = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientX));
    data.lMouseY = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientY * 1.5));
    data.lFollowX = (15 * data.lMouseX) / 100;
    data.lFollowY = (15 * data.lMouseY) / 100;
    this.smoothMoveAnimation(data);
  }

  /**
   *
   * @param elem
   * @param className
   * @returns {any}
   */
  restyleElement(elem:Array<string>, className:Array<string>, classValue:Array<string> ): void{
    elem.forEach((domElement, index) => {
      const item = document.getElementsByTagName(domElement);
      item[0]['style'][className[index]] = classValue[index];
    });
  }

  moveArrow(value:boolean):void{
    if(value){
      this.state = 'up';
      this.arrowInterval = setInterval(()=>{
        this.state == 'down' ? this.state = 'up' : this.state = 'down';
      },800)
    }else {
      clearInterval(this.arrowInterval);
      this.state = 'down';
      this.arrowInterval = null;
    }
  }

  /**
   *
   * scroll down and remove styles from DOOM
   */
  scrollDown():void{

  }


  ngOnDestroy(){
    this.restyleElement(['header','body'],['color','overflow'], ['','']);
  }

}
