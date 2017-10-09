import {Component, OnInit} from '@angular/core';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {LocalizeRouterService} from 'localize-router';
import {Router, ActivatedRoute} from '@angular/router';
import {fadeInAnimation} from '../../../../shared/routing.animation';

@Component({
  selector: 'app-tandarts',
  templateUrl: './tandarts.component.html',
  styleUrls: ['./tandarts.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TandartsComponent extends PortfolioDetailsModel implements OnInit {

  id = 'tandarts';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
