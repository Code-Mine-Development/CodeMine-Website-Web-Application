import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Portfolio} from '../../aplication/portfolio/interfaces/portfolio.interface';
import {PortfolioService} from '../../aplication/portfolio/services/portfolio.service';


@Injectable()
export class HomePageResolver implements Resolve<Portfolio> {

    constructor(private homePageService: PortfolioService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Portfolio> | Promise<Portfolio> | Portfolio {
        return this.homePageService.getPortfolioHomePageList();
    }

}
