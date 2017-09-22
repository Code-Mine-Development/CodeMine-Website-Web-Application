import {Component, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Technologies} from '../../../shared/interface/technologies.interface';
import {OfferThumbnail} from '../../../shared/interface/offerThumbnail.interface';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnChanges {
  @Input() Technologies: Technologies;
  elements: [OfferThumbnail];

  constructor(private positionService: PreviousPositionService, private router: Router, private localize: LocalizeRouterService) {
  }

  ngOnChanges() {
    this.elements = <[OfferThumbnail]>[];
    this.parseTechnologies();
  }

  parseTechnologies() {
    Object.keys(this.Technologies).forEach((key) => {
      this.elements.push({
        key: this.Technologies[key].title,
        icon: this.Technologies[key].icon,
        url: '/technologies/' + key,
        color: this.Technologies[key].color
      })
    });
  }

  navigate(url: string) {
    this.positionService.setBackCategory('technologies');
    const link: string = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }
}
