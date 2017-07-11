import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService, private localize:LocalizeRouterService) {
    const browserLang = translate.getBrowserLang();
    const currentLang = localize.parser.currentLang;

    translate.addLangs(['pl', 'en', 'nor', 'de']);
    translate.setDefaultLang('pl');

    if( currentLang.match(/pl|en|de|nor/) )
      translate.use(currentLang);
    else
      translate.use(browserLang.match(/pl|en|de|nor/) ? browserLang : 'pl');
  }
  ngOnInit() {

  }
}
