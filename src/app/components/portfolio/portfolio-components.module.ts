import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioProjectComponent} from "./portfolio-project/portfolio-project.component";
import {UiModule} from "../../shared/ui-elements/ui.module";

@NgModule({
    declarations: [
        PortfolioProjectComponent
    ],
    imports: [
        CommonModule,
        UiModule
    ],
    exports: [
        PortfolioProjectComponent
    ],
    providers: [],
})
export class PortfolioComponentModule {
}
