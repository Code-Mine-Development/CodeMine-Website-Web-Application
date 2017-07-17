import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.offer = data['offer'];
      });

  }

}
