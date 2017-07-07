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


  constructor() {

  }

  ngAfterViewInit() {
    if (document.getElementById('triangle0') && document.getElementById('triangle1')) {
      this.initBackground(event)
    }
  }

  ngOnInit() {
  };



  initBackground(event) {
    // Background #1

    const canvas1 = this.canvasRef1.nativeElement;
    const ctx1 = canvas1.getContext('2d');
    const triangle1 = document.getElementById('triangle0');
    console.log(triangle1.offsetWidth);

    canvas1.width = event.target.innerWidth ? event.target.innerWidth : triangle1.offsetWidth;
    canvas1.height = triangle1.offsetHeight;

    if(event.target.innerWidth < 850 || triangle1.offsetWidth <850){
      ctx1.beginPath();
      ctx1.moveTo(0,0);
      ctx1.lineTo(canvas1.width/2.65, 0)
      ctx1.lineTo(canvas1.width, canvas1.height/3.8);
      ctx1.lineTo(canvas1.width, canvas1.height);
      ctx1.lineTo(canvas1.width/1.4, canvas1.height);
      ctx1.lineTo(0, canvas1.height/1.45);
    }else{
    ctx1.beginPath();
    ctx1.moveTo(0,0);
    ctx1.lineTo(canvas1.width/2.7, 0);
    ctx1.lineTo(canvas1.width, canvas1.height/2.75);
    ctx1.lineTo(canvas1.width, canvas1.height);
    ctx1.lineTo(canvas1.width/1.4, canvas1.height);
    ctx1.lineTo(0, canvas1.height/1.7);
    }


    ctx1.closePath(0, 0);
    ctx1.fillStyle = '#ffda07';
    ctx1.fill();

    // ctx1.stroke();

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

    canvas2.width = event.target.innerWidth ? event.target.innerWidth : triangle2.offsetWidth;
    canvas2.height = triangle2.offsetHeight;

    if(event.target.innerWidth < 850 || triangle1.offsetWidth <850){
      ctx2.beginPath();
      ctx2.moveTo(canvas2.width / 1.4, 0);
      ctx2.lineTo(canvas2.width, 0);
      ctx2.lineTo(canvas2.width, canvas2.height / 8);
      ctx2.closePath(canvas2.width / 1.5, 0)
    }else {
      ctx2.beginPath();
      ctx2.moveTo(canvas2.width / 1.4, 0);
      ctx2.lineTo(canvas2.width, 0);
      ctx2.lineTo(canvas2.width, canvas2.height / 5.5);
      ctx2.closePath(canvas2.width / 1.5, 0)
    }

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
