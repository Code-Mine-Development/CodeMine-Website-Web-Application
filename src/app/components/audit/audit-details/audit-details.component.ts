import {Component, OnInit, Input, ViewChild, AfterViewInit, HostBinding} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';

@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  @Input() audit: Audit[];
  @ViewChild('Canvas') canvasRef;
  @Input() indexID: number;
  @HostBinding('style.width.px') width: Number;
  @HostBinding('style.height.px') height: Number;

  constructor() {}

  ngAfterViewInit() {
    if (document.getElementById('triangle1')) {
      this.initBackground()
    }

  }

  ngOnInit() {

  };
  initBackground() {
    // Background

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle1');

    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height - canvas.height * 0.3);
    ctx.closePath(0, 0);
    ctx.fillStyle = '#ffda07';
    ctx.fill();


    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle1');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    }


  }
}
