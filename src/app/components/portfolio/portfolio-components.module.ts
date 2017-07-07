import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        PortfolioProjectComponent
    ],
    imports: [
        CommonModule,
        UiModule
    ],
    exports: [
        PortfolioProjectComponent,
        TranslateModule
    ],
    providers: [],
})
export class PortfolioComponentModule {
}
