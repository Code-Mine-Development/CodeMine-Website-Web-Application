import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioResolver} from './services/portfolio.resolver';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {PortfolioDetailsComponent} from './portfolio-details/portfolio-details.component';

const portfolioRoutes: Routes = [
    {path: '', component: PortfolioComponent, resolve: {portfolio: PortfolioResolver}, children: [
        {path: '', component: PortfolioListComponent},
        {path: ':id', component: PortfolioDetailsComponent},
    ]},
];


@NgModule({
    imports: [
        RouterModule.forChild(portfolioRoutes)
    ],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

}