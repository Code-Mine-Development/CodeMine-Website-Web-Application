import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss']
})
export class AuditComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef;
  audits: Audit[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.audits = data['audit'];
      });
    }
  ngAfterViewInit() {
    if (document.getElementById('triangle-head')) {
      setTimeout(() => {
        this.initBackground()
      }, 1);

    }
  }


  initBackground() {

    // Background #1

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle-head');
    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;

    ctx.beginPath();

    let r =  1000;
    let theta = 225;

    ctx.moveTo(canvas.width/4,  canvas.height);
    ctx.lineTo(canvas.width/4 + r *Math.cos(Math.PI * theta / 180.0),  canvas.height + r * Math.sin(Math.PI * theta / 180.0));
    ctx.lineTo(0, canvas.height);
    ctx.closePath();

    ctx.fillStyle = '#ffda07';
    ctx.fill();

    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle-head');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    }
  }
}
