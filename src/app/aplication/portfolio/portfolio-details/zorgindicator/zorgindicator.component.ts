import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {fadeInAnimation} from '../../../../shared/routing.animation';

@Component({
  selector: 'app-zorgindicator',
  templateUrl: './zorgindicator.component.html',
  styleUrls: ['./zorgindicator.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ZorgindicatorComponent extends PortfolioDetailsModel implements OnInit {

  id = 'zorgindicator';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
