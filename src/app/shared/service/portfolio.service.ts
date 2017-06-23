import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Portfolio} from "../interface/portfolio.interface";
import 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class PortfolioService {

    constructor(private http: Http) {

    }

    getPortfolioList() {
        return this.http.get(url +'portfolio.json')
            .map(
                (response: Response) => {
                    const portfolio: Portfolio[] = response.json();
                    return portfolio;
                })
    }

    getPortfolioHomePageList(){
        return this.http.get(url +'portfolio.json')
            .map(
                (response: Response) => {
                    const portfolio = response.json();
                    portfolio.forEach((item,index)=>{
                        if (!item.homePage){
                            portfolio.splice(index,1);
                        }
                    });
                    return portfolio;
                })
    }

}