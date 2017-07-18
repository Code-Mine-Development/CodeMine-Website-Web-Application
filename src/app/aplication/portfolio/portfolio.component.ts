import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss'],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
