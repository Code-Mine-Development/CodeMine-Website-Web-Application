import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';

@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit {
  @Input() audit: Audit[];
  @ViewChild('Canvas') canvasRef;
  @Input() indexID: number;

  constructor() {

  }
  ngOnInit(){
    this.initBackground();
  };

  initBackground(){
    // Background

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle');

    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;

    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(canvas.width, 1);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height - canvas.height / 2);
    ctx.closePath(0, 0);
    ctx.fillStyle = '#ffda07';
    ctx.fill();


    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    }


  }
}
