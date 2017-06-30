import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {Portfolio} from '../interfaces/portfolio.interface';


@Injectable()
export class PortfolioResolver implements Resolve<Portfolio[]> {

    constructor(private portfolioService: PortfolioService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Portfolio[]> | Promise<Portfolio[]> | Portfolio[] {
        return this.portfolioService.getPortfolioList();
    }

}
