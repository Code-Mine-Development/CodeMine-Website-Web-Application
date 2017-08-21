import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {Portfolio} from '../interfaces/portfolio.interface';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {OfferElementBeforePrepare} from '../../offerElementsDetails/interface/offerElementBeforePrepare';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  details: Portfolio;
  technologies: {OfferElementBeforePrepare};
  tools: {OfferElementBeforePrepare};
  id: string;


  constructor(private service: PortfolioService,
              private route: ActivatedRoute,
              private router: Router,
              private localize: LocalizeRouterService,
              private prevPosition:PreviousPositionService
              ) {
  }

  ngOnInit() {

    this.parseParams();
    this.setTechnologiesAndTools();

  }

  parseParams(){
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.checkDetails(this.service.getPortfolioDetails(id), id);
        }
      );
  }

  setTechnologiesAndTools(){
    this.route.data.subscribe((data) => {
      this.technologies = data['technologies'];
      this.tools = data['tools'];
    });
  }

  checkDetails(details: Portfolio, id:string) {
    const link = <string>this.localize.translateRoute('/portfolio');
    if (!details) {
      return this.router.navigateByUrl(link);
    }
    this.prevPosition.setBackTo("/portfolio/"+id);
    this.details = details;
  }

  navigate( url:string ){
    let translatedUrl = <string> this.localize.translateRoute(url);
    this.router.navigateByUrl(translatedUrl);
  }
}

