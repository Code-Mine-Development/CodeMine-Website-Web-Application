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
    const defaultLang = browserLang.match(/pl|en|de|nor/) ? browserLang : 'pl';

    translate.addLangs(['pl', 'en', 'nor', 'de']);

    this.selectLanguage(currentLang, defaultLang)
  }

  selectLanguage(currentLang,defaultLang){
    if( currentLang.match(/pl|en|de|nor/) ) {
      this.translate.use(currentLang);
      this.translate.setDefaultLang(currentLang);
    }
    else {
      this.translate.use(defaultLang);
      this.translate.setDefaultLang(defaultLang);
    }
  }

  ngOnInit() {

  }
}
