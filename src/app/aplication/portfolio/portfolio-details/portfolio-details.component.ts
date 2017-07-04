import {Component, OnInit, ViewChild} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {Portfolio} from '../interfaces/portfolio.interface';
import {Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  details: Portfolio;
  id: number;
  @ViewChild('myCanvas') canvasRef;
  @ViewChild('myCanvas2') canvasRef2;
  @ViewChild('myCanvas3') canvasRef3;



  constructor(private service: PortfolioService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.details = this.service.getPortfolioDetails(this.id);
        }
      );
    this.initBackground();

  }

  initBackground() {

    // Background #1

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle1');

    canvas.width = window.innerWidth;
    canvas.height = triangle.scrollHeight + 580 ;

    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(canvas.width / 3.5, 1);
    ctx.lineTo(canvas.width, canvas.height / 3);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height - canvas.height / 2);
    ctx.closePath(0, 0);
    ctx.fillStyle = '#ffda07';
    ctx.fill();



    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle1');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0 );

    }

    // Background #2

    const canvas2 = this.canvasRef2.nativeElement;
    const ctx2 = canvas2.getContext('2d');
    const triangle2 = document.getElementById('triangle2');

    canvas2.width = window.innerWidth;
    canvas2.height = triangle2.scrollHeight + 580 ;

    ctx2.beginPath();
    ctx2.moveTo(1, 1);
    ctx2.lineTo(canvas2.width / 3.3, 1);
    ctx2.lineTo(canvas2.width, canvas2.height / 3);
    ctx2.lineTo(canvas2.width, canvas2.height);
    ctx2.lineTo(0, canvas2.height - canvas2.height / 2);
    ctx2.closePath(0, 0);
    ctx2.fillStyle = '#ffda07';
    ctx2.fill();



    const data2 = canvas2.toDataURL();
    const bg2 = document.getElementById('triangle2');

    bg2.style.backgroundImage = 'url(' + data2 + ')';

    const image2 = new Image();
    image2.onload = function () {
      ctx.drawImage(this, 0, 0 );

    }

// Background #3

    const canvas3 = this.canvasRef3.nativeElement;
    const ctx3 = canvas3.getContext('2d');
    const triangle3 = document.getElementById('triangle3');

    canvas3.width = window.innerWidth;
    canvas3.height = triangle3.scrollHeight ;

    ctx3.moveTo(1, canvas3.height/4);
    ctx3.lineTo(canvas3.width, canvas3.height/4);
    ctx3.lineTo(canvas3.width, canvas3.height / 2);
    ctx3.lineTo(1, canvas3.height -100);


    ctx3.closePath(0, 0);
    ctx3.fillStyle = '#ffda07';
    ctx3.fill();


    ctx3.stroke();
    const data3 = canvas3.toDataURL();
    const bg3= document.getElementById('triangle3');

    bg3.style.backgroundImage = 'url(' + data3 + ')';

    const image3 = new Image();
    image3.onload = function () {
      ctx.drawImage(this, 0, 0 );

    }

  }

}

