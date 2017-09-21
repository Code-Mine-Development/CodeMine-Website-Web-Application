import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioResolver} from './services/portfolio.resolver';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {LocalizeRouterModule} from 'localize-router';
import {TranslateModule} from '@ngx-translate/core';
import {TechnologiesResolver} from '../offer/services/technologies.resolver';
import {ToolsResolver} from '../offer/services/tools.resolver';
import {MidOceanComponent} from './portfolio-details/mid-ocean/mid-ocean.component';
import {TandartsComponent} from './portfolio-details/tandarts/tandarts.component';
import {TripbuzzComponent} from './portfolio-details/tripbuzz/tripbuzz.component';
import {TelecomComponent} from './portfolio-details/telecom/telecom.component';
import {ZorgindicatorComponent} from './portfolio-details/zorgindicator/zorgindicator.component';
import {SmartHomeComponent} from './portfolio-details/smart-home/smart-home.component';
import {BrighterVisionComponent} from './portfolio-details/brighter-vision/brighter-vision.component';
import {ExchangeMoneySystemComponent} from './portfolio-details/exchange-money-system/exchange-money-system.component';

const portfolioRoutes: Routes = [
  {
    path: '', component: PortfolioComponent,
    children: [
      {
        path: '', component: PortfolioListComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'mid-ocean-brands', component: MidOceanComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'tandarts', component: TandartsComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'tripbuzz', component: TripbuzzComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'e-comerce-for-telecom', component: TelecomComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'zorgindicator', component: ZorgindicatorComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'smart-home', component: SmartHomeComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'brigter-vision-growth-platform', component: BrighterVisionComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      },
      {
        path: 'exchange-money-system', component: ExchangeMoneySystemComponent,
        resolve: {
          portfolio: PortfolioResolver,
          tools: ToolsResolver,
          technologies: TechnologiesResolver
        }
      }
    ]
  },
];


@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(portfolioRoutes),
    LocalizeRouterModule.forChild(portfolioRoutes)
  ],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {

}

