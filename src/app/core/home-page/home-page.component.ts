import {Component, OnInit} from '@angular/core';
import {Portfolio} from '../../shared/interface/portfolio.interface';
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

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: Data) => {
                this.carousel = data['carousel'];
                this.company = data['company'];
            });
    }

}
