import {Component, OnInit, ViewChild} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {Portfolio} from '../interfaces/portfolio.interface';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {DrawBackgroundService} from '../../../shared/services/draw-background.service';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  details: Portfolio;
  id: string;
  @ViewChild('myCanvas') canvasRef;
  @ViewChild('myCanvas2') canvasRef2;
  @ViewChild('myCanvas3') canvasRef3;


  constructor(private service: PortfolioService,
              private route: ActivatedRoute,
              private drawBackgroundService: DrawBackgroundService,
              private router: Router,
              private localize: LocalizeRouterService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.checkDetails(this.service.getPortfolioDetails(id));
        }
      );
    this.drawBackgroundService.PortfolioDetailsBackground(this.canvasRef, this.canvasRef2, this.canvasRef3)
  }

  checkDetails(details: Portfolio) {
    const link = <string>this.localize.translateRoute('/portfolio');
    if (!details) {
      return this.router.navigateByUrl(link);
    }

    this.details = details;
  }


  resizeBackground() {
    this.drawBackgroundService.PortfolioDetailsBackground(this.canvasRef, this.canvasRef2, this.canvasRef3)
  }
}

