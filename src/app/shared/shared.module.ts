import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http} from "@angular/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ScrollToDirective } from './directives/scroll-to.directive';


@NgModule({
  exports: [
    CommonModule,
    TranslateModule,
    ScrollToDirective
  ],
  declarations: [ScrollToDirective]

})

export class SharedModule { }
