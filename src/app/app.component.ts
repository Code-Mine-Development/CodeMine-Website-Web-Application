import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService,
              private localize: LocalizeRouterService,
              private titleService: Title,
              private router: Router) {
  }

  ngOnInit() {
    this.selectLanguage();
    this.routerEventListener();
    // console.log(JSON.stringify(this.getRoutes(this.router.config)));
  }

  // getRoutes(inp, path = ''){
  //   const list = [];
  //   inp.forEach((route) => {
  //     list.push(path + "/" + route.path);
  //     if(route.children){
  //       list.push(...this.getRoutes(route.children, path + "/" + route.path))
  //     }
  //   });
  //   return list;
  // }

  selectLanguage() {
    const languages = <[string]>this.localize.parser.locales;
    const browserLang = this.translate.getBrowserLang();
    const currentLang = this.localize.parser.currentLang;
    const defaultLang = this.checkLanguages(browserLang, languages) ? browserLang : 'pl';
    this.translate.addLangs(languages);

    if (this.checkLanguages(currentLang, languages)) {
      this.activeLanguage(currentLang);
    } else {
      this.activeLanguage(defaultLang);
    }
  }

  activeLanguage(lang) {
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
  }

  checkLanguages(lang, languages) {
    return languages.find((listLang) => (listLang === lang));
  }


  routerEventListener() {
    this.router.events.filter((state) => (state instanceof NavigationEnd)).subscribe(
      (state: NavigationEnd) => {
        this.changeTitle(state);
        this.googleAnalytics(state);
      });
  }

  changeTitle(state: NavigationEnd) {
    let prefix = '';
    const page = this.parseUrl(state.urlAfterRedirects);

    this.translate.get('PAGETITLE.prefix').subscribe((translation) => {
      prefix = translation;
      this.setTitle(prefix, page);
    });
  }

  parseUrl(url: string) {
    const urlPartsList = url.split('/'),
      subPage = urlPartsList[urlPartsList.length - 1];
    return subPage.split('-').join(' ');
  }

  setTitle(prefix: string, page: string) {
    this.titleService.setTitle(prefix + ' | ' + page);
  }

  googleAnalytics(state: NavigationEnd) {
    ga('set', 'page', state.urlAfterRedirects);
    ga('send', 'pageview');
  }


}
