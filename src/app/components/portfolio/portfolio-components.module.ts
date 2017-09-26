import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {SharedModule} from '../../shared/shared.module';
import {PortfolioDetailsHeaderComponent} from './details-section/header/header.component';
import {ArchitectureComponent} from './details-section/architecture/architecture.component';
import {NextProjectPreviewComponent} from './details-section/next-project-preview/next-project-preview.component';
import {ProjectPreviewComponent} from './details-section/next-project-preview/project-preview/project-preview.component';


@NgModule({
    declarations: [
        PortfolioProjectComponent,
        PortfolioDetailsHeaderComponent,
        ArchitectureComponent,
        NextProjectPreviewComponent,
        ProjectPreviewComponent
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
        ArchitectureComponent,
        NextProjectPreviewComponent
    ],
    providers: []
})
export class PortfolioComponentModule {
}
