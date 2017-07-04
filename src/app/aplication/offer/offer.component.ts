import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Offer} from "../../shared/interface/offer.interface";


@Component ({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.scss'],
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
