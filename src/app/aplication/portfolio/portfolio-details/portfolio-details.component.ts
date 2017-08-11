import {Component, OnInit, ViewChild} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {Portfolio} from '../interfaces/portfolio.interface';
import {Params, ActivatedRoute} from '@angular/router';
import {DrawBackgroundService} from '../../../shared/services/draw-background.service';

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



  constructor(private service: PortfolioService, private route: ActivatedRoute, private drawBackgroundService: DrawBackgroundService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
          this.id = params['id'];
          this.details = this.service.getPortfolioDetails(this.id);
        }
      );
    this.drawBackgroundService.PortfolioDetailsBackground(this.canvasRef, this.canvasRef2, this.canvasRef3)
  }
  resizeBackground(){
    this.drawBackgroundService.PortfolioDetailsBackground(this.canvasRef, this.canvasRef2, this.canvasRef3)
  }
}

