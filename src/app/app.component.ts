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
    const languages = <[string]>localize.parser.locales;
    const browserLang = translate.getBrowserLang();
    const currentLang = localize.parser.currentLang;
    const defaultLang = this.checkLanguages( browserLang, languages )? browserLang : 'pl';


    translate.addLangs(languages);

    if( this.checkLanguages( currentLang, languages ) )
      this.selectLanguage(currentLang);
    else
      this.selectLanguage(defaultLang);

  }

  selectLanguage(lang){
      this.translate.use(lang);
      this.translate.setDefaultLang(lang);
  }

  checkLanguages(lang, languages){
    return languages.find( (listLang) => (listLang == lang)) || false;
  }


  ngOnInit() {

  }
}
