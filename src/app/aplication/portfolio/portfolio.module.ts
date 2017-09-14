import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio.routing';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {PortfolioComponentModule} from '../../components/portfolio/portfolio-components.module';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {TechnologiesResolver} from '../offer/services/technologies.resolver';
import {ToolsResolver} from '../offer/services/tools.resolver';

import {DrawBackgroundService} from '../../shared/services/draw-background.service';
import {SharedModule} from '../../shared/shared.module';
import { MidOceanComponent } from './portfolio-details/mid-ocean/mid-ocean.component';
import { TandartsComponent } from './portfolio-details/tandarts/tandarts.component';
import { TripbuzzComponent } from './portfolio-details/tripbuzz/tripbuzz.component';
import { TelecomComponent } from './portfolio-details/telecom/telecom.component';
import { ZorgindicatorComponent } from './portfolio-details/zorgindicator/zorgindicator.component';
import { SmartHomeComponent } from './portfolio-details/smart-home/smart-home.component';
import { BrighterVisionComponent } from './portfolio-details/brighter-vision/brighter-vision.component';




@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioListComponent,
        MidOceanComponent,
        TandartsComponent,
        TripbuzzComponent,
        TelecomComponent,
        ZorgindicatorComponent,
        SmartHomeComponent,
        BrighterVisionComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        PortfolioRoutingModule,
        PortfolioComponentModule,
        SharedModule
    ],
    exports: [],
    providers: [DrawBackgroundService, ToolsResolver, TechnologiesResolver]
})
export class PortfolioModule {
}
