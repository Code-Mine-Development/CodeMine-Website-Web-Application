import {Component, OnInit} from '@angular/core';
import {Company} from '../../shared/interface/company.interface';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {fadeInAnimation} from '../../shared/routing.animation';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AboutUsComponent implements OnInit {

  company: Company;

  constructor(private route: ActivatedRoute, private router: Router, private localize: LocalizeRouterService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.company = data['company'];
      });
  }

  navigate(target) {
    let route;
    if (target === 'contact') {
      route = this.localize.translateRoute('/' + target);
    }

    this.router.navigateByUrl(route);
  }

}
