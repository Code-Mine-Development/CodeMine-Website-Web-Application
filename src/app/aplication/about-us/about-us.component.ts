import { Component, OnInit } from '@angular/core';
import {Company} from '../../shared/interface/company.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class AboutUsComponent implements OnInit {
  company: Company;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.company = data['company'];
      });
  }

}
