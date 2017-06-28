import { Component, OnInit } from '@angular/core';
import {Data, ActivatedRoute} from "@angular/router";
import {Portfolio} from "../interfaces/portfolio.interface";

@Component({
  selector: 'app-portfo-list',
  templateUrl: './portfo-list.component.html',
  styleUrls: ['./portfo-list.component.scss']
})
export class PortfoListComponent implements OnInit {
  portfolio: Portfolio;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.portfolio = data['portfolio'];
        });
  }

}
