import {Component, OnInit} from '@angular/core';
import {Data, ActivatedRoute, Router} from "@angular/router";
import {Portfolio} from "../interfaces/portfolio.interface";
import {AppRoutingProvider} from "../../../app-routing-provider";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
    portfolio: Portfolio;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: Data) => {
                this.portfolio = data['portfolio'];
            });
    }

    showDetails(index:number):void{
        this.router.navigate(AppRoutingProvider.portfolioDetail(index),{relativeTo: this.route})
    }

}
