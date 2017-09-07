import {Component, OnInit} from '@angular/core';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {LocalizeRouterService} from 'localize-router';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tandarts',
  templateUrl: './tandarts.component.html',
  styleUrls: ['./tandarts.component.scss']
})
export class TandartsComponent extends PortfolioDetailsModel implements OnInit {

  protected id = 'tandarts';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
