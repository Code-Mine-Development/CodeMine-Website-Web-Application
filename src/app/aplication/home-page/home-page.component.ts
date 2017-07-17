import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../portfolio/interfaces/portfolio.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {Company} from '../../shared/interface/company.interface';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.scss'],
    animations:[fadeInAnimation],
    host:{ '[@fadeInAnimation]': '' }
})
export class HomePageComponent implements OnInit {
    carousel: Portfolio;
    company: Company;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.carousel = data['carousel'];
        this.company = data['company'];
      });
  }
}
