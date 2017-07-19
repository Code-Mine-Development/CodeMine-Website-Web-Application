import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService, private localize:LocalizeRouterService, private titleService:Title, private router:Router) {
    this.selectLanguage();
    this.changeTitle();
  }

  selectLanguage(){
    const languages = <[string]>this.localize.parser.locales;
    const browserLang = this.translate.getBrowserLang();
    const currentLang = this.localize.parser.currentLang;
    const defaultLang = this.checkLanguages( browserLang, languages )? browserLang : 'pl';


    this.translate.addLangs(languages);

    if( this.checkLanguages( currentLang, languages ) )
      this.activeLanguage(currentLang);
    else
      this.activeLanguage(defaultLang);
  }


  activeLanguage(lang){
      this.translate.use(lang);
      this.translate.setDefaultLang(lang);
  }

  checkLanguages(lang, languages){
    return languages.find( (listLang) => (listLang == lang)) || false;
  }

  changeTitle(){
    let prefix = "",
        page = "";

    this.translate.get('PAGETITLE.prefix').subscribe( (translation) => {
      prefix = translation;
      this.setTitle(prefix, page);
    });

    this.router.events.subscribe( (state) => {
      if(state instanceof NavigationEnd)
        page = this.parseUrl(state.url);
      this.setTitle(prefix, page);
    });

  }

  parseUrl(url:string){
    let urlPartsList = url.split("/"),
        subPage = urlPartsList[urlPartsList.length-1];

    return subPage.replace("-"," ");
  }

  setTitle(prefix:string, page:string){
    this.titleService.setTitle(prefix + " | " + page);
  }

  ngOnInit() {

  }
}
