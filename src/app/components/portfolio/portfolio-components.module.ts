import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {SharedModule} from '../../shared/shared.module';


import { PortfolioDetailsHeaderComponent } from './details-section/header/header.component';
import { ArchitectureComponent } from './details-section/architecture/architecture.component';


@NgModule({
    declarations: [
        PortfolioProjectComponent,
        PortfolioDetailsHeaderComponent,
        ArchitectureComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        TranslateModule,
        SharedModule
    ],
    exports: [
        PortfolioProjectComponent,
        PortfolioDetailsHeaderComponent,
        ArchitectureComponent
    ],
    providers: []
})
export class PortfolioComponentModule {
}
