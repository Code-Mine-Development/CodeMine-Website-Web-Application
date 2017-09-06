import { Component, OnInit } from '@angular/core';
import {PortfolioDetailsModel} from '../portfolio-details.model';
import {PreviousPositionService} from '../../../../shared/services/previous-position.service';
import {LocalizeRouterService} from 'localize-router';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tripbuzz',
  templateUrl: './tripbuzz.component.html',
  styleUrls: ['./tripbuzz.component.scss']
})
export class TripbuzzComponent extends PortfolioDetailsModel implements OnInit {

  protected id = 'tripbuzz';

  constructor(route: ActivatedRoute,
              router: Router,
              localize: LocalizeRouterService,
              prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition);
  }

}
