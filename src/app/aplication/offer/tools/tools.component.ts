import {Component, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {OfferElementBeforePrepare} from '../../offerElementsDetails/interface/offerElementBeforePrepare';
import {OfferThumbnail} from '../../../shared/interface/offerThumbnail.interface';

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.scss']
})
export class ToolsComponent implements OnChanges {
  @Input() Tools: OfferElementBeforePrepare;
  elements: [OfferThumbnail];

  constructor(private positionService: PreviousPositionService, private router: Router, private localize: LocalizeRouterService) {
  }


  ngOnChanges() {
    this.elements = <[OfferThumbnail]>[];
    this.parseTechnologies();
  }

  parseTechnologies() {
    Object.keys(this.Tools).forEach((key) => {
      this.elements.push({
        key: key,
        icon: this.Tools[key].icon,
        url: '/tools/' + key,
        color: this.Tools[key].color
      })
    });
  }

  navigate(url: string) {
    this.positionService.setBackCategory('tools');
    const link: string = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }

}
