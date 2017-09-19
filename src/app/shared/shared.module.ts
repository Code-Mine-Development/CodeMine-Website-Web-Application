import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollToDirective} from './directives/scroll-to.directive';
import {ScrollToService} from './services/scroll-to.service';
import {ToolTipDirective} from './directives/tool-tip.directive';
import {ToolTipComponent} from './ui-elements/tool-tip/tool-tip.component';

@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ScrollToDirective,
    ToolTipDirective
  ],
  providers: [
    ScrollToService,

  ],
  declarations: [
    ScrollToDirective,
    ToolTipDirective,
    ToolTipComponent
  ],
  entryComponents:[
    ToolTipComponent
  ]

})

export class SharedModule {
}
