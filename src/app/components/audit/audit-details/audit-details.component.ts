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

  constructor() {}

  ngAfterViewInit() {
        if (this.audit && document.getElementById('triangle0') && document.getElementById('triangle1')) {
          setTimeout(() => {
            this.initBackground()
          }, 1);
    }

  }

  ngOnInit() {

  };

  initBackground() {
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
