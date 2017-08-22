import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../portfolio/interfaces/portfolio.interface';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Company} from '../../shared/interface/company.interface';
import {fadeInAnimation} from '../../shared/routing.animation';
import {LocalizeRouterService} from 'localize-router';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.scss'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class HomePageComponent implements OnInit {
    carousel: Portfolio;
    company: Company;

  constructor(private route: ActivatedRoute, private router: Router, private localize: LocalizeRouterService) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.carousel = data['carousel'];
        this.company = data['company'];
      });
  }

  onNavigate(url:string){
    let translate = <string> this.localize.translateRoute(url);
    this.router.navigateByUrl(translate);
  }
}
