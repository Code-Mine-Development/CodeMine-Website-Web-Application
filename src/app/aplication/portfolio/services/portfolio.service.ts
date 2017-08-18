import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Portfolio} from '../interfaces/portfolio.interface';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

const url = 'assets/data/';

@Injectable()
export class PortfolioService {

    private portfolio: Portfolio[];

    constructor(private http: Http) {

    }

    getPortfolioList() {
        if (this.portfolio)
          return Observable.from([this.portfolio]);

        return this.http.get(url + 'portfolio.json')
            .map((response: Response) => {
                    const portfolio: Portfolio[] = response.json();
                    this.portfolio = portfolio;
                    return portfolio;
                })
    }

    getPortfolioDetails(index: string): Portfolio {
        return this.portfolio.find((project) => (project.link === index ));
    }

    getPortfolioHomePageList() {
      if (this.portfolio)
        return Observable.from([this.portfolio])
                        .map((portfolio: Portfolio[]) => (portfolio.filter( (portfolio: Portfolio) => (portfolio.homePage))));

        return this.http.get(url + 'portfolio.json')
            .map( (response: Response) => {
                    const portfolio: Portfolio[] = response.json();
                    this.portfolio = portfolio;
                    return portfolio.filter( (portfolio: Portfolio) => (portfolio.homePage));
                })
    }

}
