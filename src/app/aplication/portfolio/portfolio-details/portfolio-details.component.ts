import { Component, OnInit } from '@angular/core';
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

  constructor(private service: PortfolioService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = params['id'];
              this.details = this.service.getPortfolioDetails(this.id);
            }
        )
  }

}
