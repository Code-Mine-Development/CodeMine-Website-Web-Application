import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';

@Component({
  selector: 'app-zorgindicator',
  templateUrl: './zorgindicator.component.html',
  styleUrls: ['./zorgindicator.component.scss']
})
export class ZorgindicatorComponent extends PortfolioDetailsModel implements OnInit {

  protected id = 'zorgindicator';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
