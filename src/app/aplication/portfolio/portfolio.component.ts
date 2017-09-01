import {Component, OnInit, HostBinding} from '@angular/core';
import {fadeInAnimation} from '../../shared/routing.animation';
import {PreviousPositionService} from '../../shared/services/previous-position.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class PortfolioComponent implements OnInit {

  @HostBinding('class.container') container = true;

  constructor(private previousPosition: PreviousPositionService) { }

  ngOnInit() {
    this.previousPosition.setBackTo('portfolio')
  }

}
