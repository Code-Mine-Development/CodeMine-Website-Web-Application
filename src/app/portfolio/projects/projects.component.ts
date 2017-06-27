import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../../shared/interface/portfolio.interface';
import {PortfolioService} from '../../shared/service/portfolio.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  })
export class ProjectsComponent implements OnInit {
  projects: Portfolio[];

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getPortfolioList()
      .subscribe(
        (data) => {
          this.projects = data;
          }
      );
  }



}
