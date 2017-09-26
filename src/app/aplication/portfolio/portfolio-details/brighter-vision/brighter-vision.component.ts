import {Component, OnInit} from '@angular/core';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {Router, ActivatedRoute} from '@angular/router';
import {fadeInAnimation} from '../../../../shared/routing.animation';

@Component({
  selector: 'app-brighter-vision',
  templateUrl: './brighter-vision.component.html',
  styleUrls: ['./brighter-vision.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BrighterVisionComponent extends PortfolioDetailsModel implements OnInit {

  id = 'brigter-vision-growth-platform';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }
}
