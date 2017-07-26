import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {PreviousPositionService} from '../../shared/services/previous-position.service';
import {Offer} from '../../shared/interface/offer.interface';
import {fadeInAnimation} from "../../shared/routing.animation";
import {Technology} from '../technologies/interface/technology.interface';
import {Tool} from '../tools/interface/tool.interface';



@Component ({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.scss'],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})

export class OfferComponent implements OnInit {
  offer: Offer;
  technologies: Technology[];
  tools: Tool[];

  constructor(private route: ActivatedRoute, private previousPosition:PreviousPositionService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.offer = data['offer'];
        this.technologies = data['technologies'];
        this.tools= data['tools'];
      });
    this.previousPosition.setBackTo("offer")
  }

}
