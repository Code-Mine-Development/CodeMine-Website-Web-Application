import { Component, OnInit } from '@angular/core';
import {LocalizeRouterService} from 'localize-router';
import {Router, ActivatedRoute} from '@angular/router';

import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';

@Component({
  selector: 'app-smart-home',
  templateUrl: './smart-home.component.html',
  styleUrls: ['./smart-home.component.scss']
})
export class SmartHomeComponent extends PortfolioDetailsModel implements OnInit {

  protected id = 'smart-home';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
