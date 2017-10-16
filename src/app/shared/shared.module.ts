import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollToDirective} from './directives/scroll-to.directive';
import {ScrollToService} from './services/scroll-to.service';
import {ToolTipDirective} from './directives/tool-tip.directive';
import {ToolTipComponent} from './ui-elements/tool-tip/tool-tip.component';
import {CopyToClipboardService} from './services/copy-to-clipboard.service';
import {PrettifyTextPipe} from './pipe/prettify-text.pipe';
import {EventManagerService} from './services/event-manager.service';
@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ScrollToDirective,
    ToolTipDirective,
    PrettifyTextPipe
  ],
  providers: [
    ScrollToService,
    CopyToClipboardService,
    EventManagerService
  ],
  declarations: [
    ScrollToDirective,
    ToolTipDirective,
    ToolTipComponent,
    PrettifyTextPipe
  ],
  entryComponents: [
    ToolTipComponent
  ]

})

export class SharedModule {
}
