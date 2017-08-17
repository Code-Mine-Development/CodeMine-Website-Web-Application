import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { BrighterVisionGrowthPlatformComponent } from './details-section/brighter-vision-growth-platform/brighter-vision-growth-platform.component';

@NgModule({
    declarations: [
        PortfolioProjectComponent,
        BrighterVisionGrowthPlatformComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        TranslateModule,
        SharedModule
    ],
    exports: [
        PortfolioProjectComponent,
        BrighterVisionGrowthPlatformComponent
    ],
    providers: [],
})
export class PortfolioComponentModule {
}
