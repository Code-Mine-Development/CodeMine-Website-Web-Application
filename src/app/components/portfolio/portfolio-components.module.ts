import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioProjectComponent} from './portfolio-project/portfolio-project.component';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

import { PortfolioDetailsHeaderComponent } from './details-section/header/header.component';
import { ImageComponent } from './details-section/image/image.component';
import { TextComponent } from './details-section/text/text.component';
import { ImagesComponent } from './details-section/images/images.component';
import { ArchitectureComponent } from './details-section/architecture/architecture.component';
import { IconsComponent } from './details-section/icons/icons.component';
import { TwoImagesComponent } from './details-section/two-images/two-images.component';
import { PortfolioDetailsGeneratorComponent } from './portfolio-details-generator.component';
import { StarInfoComponent } from './details-section/star-info/star-info.component';

@NgModule({
    declarations: [
        PortfolioProjectComponent,
        PortfolioDetailsHeaderComponent,
        ImageComponent,
        TextComponent,
        ImagesComponent,
        ArchitectureComponent,
        IconsComponent,
        TwoImagesComponent,
        PortfolioDetailsGeneratorComponent,
        StarInfoComponent
    ],
    imports: [
        CommonModule,
        UiModule,
        TranslateModule,
        SharedModule
    ],
    exports: [
        PortfolioProjectComponent,
        PortfolioDetailsGeneratorComponent
    ],
    providers: [],
    entryComponents: [
      PortfolioDetailsHeaderComponent,
      ImageComponent,
      TextComponent,
      ImagesComponent,
      ArchitectureComponent,
      IconsComponent,
      TwoImagesComponent,
      StarInfoComponent
    ]
})
export class PortfolioComponentModule {
}
