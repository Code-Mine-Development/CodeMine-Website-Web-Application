import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {PreviousPositionService} from '../../shared/services/previous-position.service';
import {Offer} from '../../shared/interface/offer.interface';
import {fadeInAnimation} from "../../shared/routing.animation";



@Component ({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.scss'],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})

export class OfferComponent implements OnInit {
  offer: Offer;

  constructor(private route: ActivatedRoute, private previousPosition:PreviousPositionService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.offer = data['offer'];
      });
    this.previousPosition.setBackTo("offer")
  }

}
