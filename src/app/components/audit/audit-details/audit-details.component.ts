import {Component, OnInit, Input, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';

@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  @Input() audit: Audit[];
  @ViewChild('Canvas1') canvasRef1;
  @ViewChild('Canvas2') canvasRef2;
  @Input() indexID: number;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    let viewport = $event.path[1].scrollY;

    let firstList  = <HTMLElement>document.querySelectorAll("#list1")[0];
    let secondList = <HTMLElement> document.querySelectorAll("#list2")[0];
    let thirdList  = <HTMLElement> document.querySelectorAll("#list1")[1];
    let fourthList = <HTMLElement> document.querySelectorAll("#list2")[1];

    let list1ToTop = firstList.offsetTop - firstList.offsetHeight;
    let list2ToTop = secondList.offsetTop - secondList.offsetHeight;
    let list3ToTop = thirdList.offsetTop - thirdList.offsetHeight;
    let list4ToTop = fourthList.offsetTop - fourthList.offsetHeight;


    for( let i = 0; i <  5; i++){
      let listElement  = <HTMLElement>document.getElementsByClassName('listItem')[i];
      let listElement2 = <HTMLElement>document.getElementsByClassName('listItem')[i+5];
      let listElement3 = <HTMLElement>document.getElementsByClassName('listItem')[i+10];
      let listElement4 = <HTMLElement>document.getElementsByClassName('listItem')[i+15];

      let ticks1 = <HTMLElement>document.getElementsByClassName('tick')[i];
      let ticks2 = <HTMLElement>document.getElementsByClassName('tick')[i+5];
      let ticks3 = <HTMLElement>document.getElementsByClassName('tick')[i+10];
      let ticks4 = <HTMLElement>document.getElementsByClassName('tick')[i+15];

      let item1ToTop = listElement.offsetTop +  list1ToTop;
      let item2ToTop = listElement2.offsetTop + list2ToTop;
      let item3ToTop = listElement3.offsetTop + list3ToTop;
      let item4ToTop = listElement4.offsetTop + list4ToTop;



      if ( viewport -150 >= item1ToTop) {
        listElement.style.animation = 'jumpIn 1s forwards';
        ticks1.style.animation="draw-tick 2s .5s forwards";
      }
      if( viewport -150 >= item2ToTop){
        listElement2.style.animation = 'jumpIn 1s forwards';
        ticks2.style.animation="draw-tick 2s .5s forwards";
      }
      if( viewport -150 >= item3ToTop){
        listElement3.style.animation = 'jumpIn 1s forwards';
        ticks3.style.animation="draw-tick 2s .5s forwards";
      }
      if( viewport -150 >= item4ToTop){
        listElement4.style.animation = 'jumpIn 1s forwards';
        ticks4.style.animation="draw-tick 2s .5s forwards";
      }
    }
  }

  constructor() {

  }

  ngAfterViewInit() {
        if (this.audit && document.getElementById('triangle0') && document.getElementById('triangle1')) {
          setTimeout(() => {
            this.initBackground(event)
          }, 1);
    }
  }
  ngOnInit(){

  };

initBackground(event) {
    // Background #1

    const canvas1 = this.canvasRef1.nativeElement;
    const ctx1 = canvas1.getContext('2d');
    const triangle1 = document.getElementById('triangle0');

    canvas1.width = window.innerWidth;
    canvas1.height = triangle1.offsetHeight;

    let r =  4500;
    let theta = 45;
    let theta2 = 225;

    ctx1.moveTo(0,0);
    ctx1.lineTo(canvas1.width/4, 0);
    ctx1.lineTo(canvas1.width/5 + r * Math.cos(Math.PI * theta / 180.0),  r * Math.sin(Math.PI * theta / 180.0));
    ctx1.lineTo(canvas1.width, canvas1.height);
    ctx1.lineTo(canvas1.width/5, canvas1.height);
    ctx1.lineTo(canvas1.width/5 + r *Math.cos(Math.PI * theta2 / 180.0), canvas1.height +   r * Math.sin(Math.PI * theta2 / 180.0));
    ctx1.closePath();

    ctx1.fillStyle = '#ffda07';
    ctx1.fill();

    const data1 = canvas1.toDataURL();
    const bg1 = document.getElementById('triangle0');

    bg1.style.backgroundImage = 'url(' + data1 + ')';

    const image1 = new Image();
    image1.onload = function () {
      ctx1.drawImage(this, 0, 0);
    }


    // Background #2

    const canvas2 = this.canvasRef2.nativeElement;
    const ctx2 = canvas2.getContext('2d');
    const triangle2 = document.getElementById('triangle1');

    canvas2.width = window.innerWidth;
    canvas2.height = triangle2.offsetHeight;

    ctx2.moveTo(canvas1.width/5, 0);
    ctx2.lineTo(canvas1.width/5 + r * Math.cos(Math.PI * theta / 180.0),  r * Math.sin(Math.PI * theta / 180.0));
    ctx2.lineTo(canvas2.width, 0);
    ctx2.closePath();
    ctx2.fillStyle = '#ffda07';
    ctx2.fill();

    const data2 = canvas2.toDataURL();
    const bg2 = document.getElementById('triangle1');

    bg2.style.backgroundImage = 'url(' + data2 + ')';

    const image = new Image();
    image.onload = function () {
      ctx2.drawImage(this, 0, 0);

    }
  }
}
