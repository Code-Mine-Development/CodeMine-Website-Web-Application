import {Component, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Technologies} from '../../../shared/interface/technologies.interface';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnChanges {
  @Input() Technologies: Technologies;
  keys = [];

  constructor(private positionService: PreviousPositionService, private router: Router, private localize: LocalizeRouterService) {
  }

  ngOnChanges() {
    this.keys = Object.keys(this.Technologies);
  }

  navigate(url: string) {
    this.positionService.setBackCategory('technologies');
    const link: string = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }
}
