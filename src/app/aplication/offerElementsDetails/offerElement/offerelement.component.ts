import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { OfferElement } from '../interface/offerElement.interface';
import { PreviousPositionService } from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-angular',
  templateUrl: 'offerelement.component.html',
  styleUrls: ['offerelement.component.scss']
})
export class OfferElementComponent implements OnInit {

  @ViewChild('svg') svg;
  viewBox = '0 0 128 128';

  private offerElement: OfferElement;

  constructor( private route: ActivatedRoute, private previousPositionService: PreviousPositionService, private localize: LocalizeRouterService ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.offerElement = data['offerelement'];
        this.svg.nativeElement.innerHTML = this.offerElement.icon.svgBody;
        this.viewBox = this.offerElement.icon.viewBox;
      }
    );
  }
  getBackLink(){
    const previousPage = this.previousPositionService.getBackTo();
    return this.localize.translateRoute('/' + previousPage + '/');
  }


}
