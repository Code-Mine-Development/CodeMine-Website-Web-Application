import {OnInit, HostListener} from '@angular/core';
import {Portfolio} from '../interfaces/portfolio.interface';
import {OfferElementBeforePrepare} from '../../offerElementsDetails/interface/offerElementBeforePrepare';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';

export class PortfolioDetailsModel implements OnInit {

  protected id: string;
  detail: Portfolio;
  tools: OfferElementBeforePrepare;
  technologies: OfferElementBeforePrepare;
  portfolio: Portfolio;
  mobile: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private localize: LocalizeRouterService,
              private prevPosition: PreviousPositionService) {
  }

  @HostListener('window:resize', []) onResize() {
    this.checkMobile();
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.parseDetails(data['portfolio'], this.id);
      this.technologies = data['technologies'];
      this.tools = data['tools'];
      this.portfolio = data['portfolio'];
    });
    this.checkMobile();
  }

  parseDetails(details: Portfolio[], id: string) {
    const link = <string>this.localize.translateRoute('/portfolio'),
      detail = details.find((detail_element: Portfolio) => detail_element.link === id);
    if (!detail) {
      return this.router.navigateByUrl(link);
    }
    this.prevPosition.setBackTo('/portfolio/' + id);
    this.detail = detail;
  }

  navigate(url: string) {
    const link = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }

  checkMobile() {
    this.mobile = window.innerWidth <= 768;
  }

}
