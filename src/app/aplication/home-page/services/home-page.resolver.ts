import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {PortfolioService} from '../../portfolio/services/portfolio.service';
import {Portfolio} from '../../portfolio/interfaces/portfolio.interface';


@Injectable()
export class HomePageResolver implements Resolve<Portfolio> {

    constructor(private homePageService: PortfolioService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Portfolio> | Promise<Portfolio> | Portfolio {
        console.log(this.homePageService.getPortfolioHomePageList());
        return this.homePageService.getPortfolioHomePageList();
    }

}
