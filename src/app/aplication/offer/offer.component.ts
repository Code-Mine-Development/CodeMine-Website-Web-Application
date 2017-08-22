import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {PreviousPositionService} from '../../shared/services/previous-position.service';
import {Offer} from '../../shared/interface/offer.interface';
import {fadeInAnimation} from '../../shared/routing.animation';
import {OfferElementBeforePrepare} from '../offerElementsDetails/interface/offerElementBeforePrepare';
import {ScrollToService} from '../../shared/services/scroll-to.service';


@Component({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})

export class OfferComponent implements OnInit, AfterViewInit {
  offer: Offer;
  technologies: OfferElementBeforePrepare[];
  tools: OfferElementBeforePrepare[];

  constructor(private route: ActivatedRoute, private previousPosition: PreviousPositionService, private scrollService: ScrollToService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.offer = data['offer'];
        this.technologies = data['technologies'];
        this.tools = data['tools'];
      });
    this.previousPosition.setBackTo('offer');
  }

  ngAfterViewInit() {
    const category = this.previousPosition.getBackCategory();
    if (!category || category === ''){
      return;
    }

    switch (category) {
      case 'tools':
        this.goToSection('offer_tools');
        break;
      case 'technologies':
        this.goToSection('offer_technologies');
        break;
    }
  }

  goToSection(section: string) {
    this.previousPosition.setBackCategory('');
    this.scrollService.scroll(section)
  }

}
