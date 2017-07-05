import {Component, OnInit, Input, ViewChild, AfterViewInit, HostBinding} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';
import {Renderer} from '@angular/core';

@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  @Input() audit: Audit[];
  @ViewChild('Canvas') canvasRef;
  @Input() indexID: number;


  constructor() {

  }

  ngAfterViewInit() {
    if (document.getElementById('triangle0')) {
      this.initBackground()
    }

  }

  ngOnInit() {

  };


  initBackground() {
    // Background

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle0');

    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvas.width/3, 0)
    ctx.lineTo(canvas.width, canvas.height/1.7);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width/1.35, canvas.height);
    ctx.lineTo(0, canvas.height/1.4);



    // ctx.closePath(0, 0);
    ctx.fillStyle = '#ffda07';
    ctx.fill();

    // ctx.stroke();

    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle0');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    }


  }
}
