import {Component, NgZone, OnInit} from '@angular/core';
import {Portfolio} from '../../aplication/portfolio/interfaces/portfolio.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {Company} from '../../shared/interface/company.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    carousel: Portfolio;
    company: Company;
    width: number;
    height: number;
    heightDocument: number;

  constructor(private route: ActivatedRoute, ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      });
      console.log(this.width, this.height);
      this.heightDocument = this.height - 200;
      console.log(this.heightDocument);
    };
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.carousel = data['carousel'];
        this.company = data['company'];
      });
  }
}
