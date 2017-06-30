import {Component, OnInit} from '@angular/core';
import {Data, ActivatedRoute} from '@angular/router';
import {Portfolio} from '../interfaces/portfolio.interface';

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
    portfolio: Portfolio;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: Data) => {
                this.portfolio = data['portfolio'];
            });
    }

}
