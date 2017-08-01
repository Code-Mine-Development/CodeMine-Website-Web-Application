import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-offer-elements',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class OfferElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
