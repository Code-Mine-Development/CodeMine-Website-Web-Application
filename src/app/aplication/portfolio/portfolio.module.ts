import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from "./portfolio.component";
import {PortfolioRoutingModule} from "./portfolio.routing";
import {UiModule} from "../../shared/ui-elements/ui.module";
import {PortfolioComponentModule} from "../../components/portfolio/portfolio-components.module";
import {PortfolioDetailsComponent} from './portfolio-details/portfolio-details.component';
import {PortfoListComponent} from "./portfo-list/portfo-list.component";


@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioDetailsComponent,
        PortfoListComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        PortfolioRoutingModule,
        PortfolioComponentModule
    ],
    exports: [],
    providers: []
})
export class PortfolioModule {
}
