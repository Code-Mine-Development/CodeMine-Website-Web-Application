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
        this.initBackground(event)
      }, 1);

    }
  }


  initBackground(event) {

    // Background #1

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle-head');
    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;


    if(window.innerWidth < 850){
      ctx.beginPath();
      ctx.moveTo(0, canvas.height /2.9);
      ctx.lineTo(canvas.width / 2.5, canvas.height);
      ctx.lineTo(0, canvas.height);

    }else {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2.5);
      ctx.lineTo(canvas.width / 2.65, canvas.height);
      ctx.lineTo(0, canvas.height);

    }
      ctx.closePath(0, canvas.height / 2.5);
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
