import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollToDirective} from './directives/scroll-to.directive';
import {ScrollToService} from './services/scroll-to.service';


@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    ScrollToDirective
  ],
  providers: [
    ScrollToService,

  ],
  declarations: [ScrollToDirective]

})

export class SharedModule {
}
