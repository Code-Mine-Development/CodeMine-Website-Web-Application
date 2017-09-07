import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {PortfolioDetailsModel} from '../portfolio-details.model';

@Component({
  selector: 'app-mid-ocean',
  templateUrl: './mid-ocean.component.html',
  styleUrls: ['./mid-ocean.component.scss']
})
export class MidOceanComponent extends PortfolioDetailsModel implements OnInit {

  protected id = 'mid-ocean-brands';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }


}
