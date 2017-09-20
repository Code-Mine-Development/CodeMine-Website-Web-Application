import { Component, OnInit } from '@angular/core';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {LocalizeRouterService} from 'localize-router';
import {Router, ActivatedRoute} from '@angular/router';
import {PortfolioDetailsModel} from '../portfolio-details.model';

@Component({
  selector: 'app-exchange-money-system',
  templateUrl: './exchange-money-system.component.html',
  styleUrls: ['./exchange-money-system.component.scss']
})
export class ExchangeMoneySystemComponent  extends PortfolioDetailsModel implements OnInit {

  protected id = 'exchange-money-system';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }
}
