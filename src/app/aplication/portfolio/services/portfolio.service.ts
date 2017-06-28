import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Portfolio} from "../interfaces/portfolio.interface";
import 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class PortfolioService {

    private portfolio:Portfolio[] = [];

    constructor(private http: Http) {

    }

    getPortfolioList() {
        return this.http.get(url + 'portfolio.json')
            .map(
                (response: Response) => {
                    const portfolio: Portfolio[] = response.json();
                    this.portfolio = portfolio;
                    return portfolio;
                })
    }

    getPortfolioDetails(index:number):Portfolio {
        return this.portfolio[index];
    }

    getPortfolioHomePageList() {
        return this.http.get(url + 'portfolio.json')
            .map(
                (response: Response) => {
                    const portfolio = response.json();
                    portfolio.forEach((item, index) => {
                        if (!item.homePage) {
                            portfolio.splice(index, 1);
                        }
                    });
                    return portfolio;
                })
    }

}
