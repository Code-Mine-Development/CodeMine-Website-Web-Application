import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioResolver} from './services/portfolio.resolver';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {PortfolioDetailsComponent} from './portfolio-details/portfolio-details.component';
import {LocalizeRouterModule} from 'localize-router';
import {TranslateModule} from '@ngx-translate/core';
import {TechnologiesResolver} from '../offer/services/technologies.resolver';
import {ToolsResolver} from '../offer/services/tools.resolver';

const portfolioRoutes: Routes = [
    {path: '', component: PortfolioComponent, resolve: { portfolio: PortfolioResolver }, children: [
        {path: '', component: PortfolioListComponent },
        {path: ':id',  component: PortfolioDetailsComponent,
          resolve: {
            tools: ToolsResolver,
            technologies: TechnologiesResolver
          }},
    ]},
];


@NgModule({
    imports: [
      TranslateModule,
      LocalizeRouterModule.forChild(portfolioRoutes),
      RouterModule.forChild(portfolioRoutes)
    ],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {

}

