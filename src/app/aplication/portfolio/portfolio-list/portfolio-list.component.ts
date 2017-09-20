import {Component, OnInit} from '@angular/core';
import {Data, ActivatedRoute, Router} from '@angular/router';
import {Portfolio} from '../interfaces/portfolio.interface';
import {LocalizeRouterService} from 'localize-router';
import {OfferElementBeforePrepare} from '../../offerElementsDetails/interface/offerElementBeforePrepare';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  portfolio: Portfolio;
  tools: OfferElementBeforePrepare;
  technologies: OfferElementBeforePrepare;

  constructor(private route: ActivatedRoute, private router: Router, private localize: LocalizeRouterService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.portfolio = data['portfolio'];
        this.tools = data['tools'];
        this.technologies = data['technologies'];
      });
  }

  showDetails(index: string): void {
    const translatedPath: any = this.localize.translateRoute('/portfolio/' + index);
    this.router.navigateByUrl(translatedPath)
  }

  navigate(url: string) {
    const link = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }

}
