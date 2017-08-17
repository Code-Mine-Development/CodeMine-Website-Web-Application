import {Component, OnInit, Inject, HostListener, HostBinding} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';
import {HomeInformationServices} from '../../components/home-page/services/home-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  @HostBinding('style.display') visibility: string;

  navigation = [
    {
      'title': 'NAVIGATION.about_as',
      'href': 'aboutus'
    },
    {
      'title': 'NAVIGATION.portfolio',
      'href': 'portfolio'
    },
    {
      'title': 'NAVIGATION.offer',
      'href': 'offer'
    },
    {
      'title': 'NAVIGATION.audit',
      'href': 'audit'
    },
    {
      'title': 'NAVIGATION.contact',
      'href': 'contact'
    }
  ];

  scrollTop = 0;
  windowScrollTop = 0;
  homeInformationScrollTop = 0;
  opacity: number;

  constructor(@Inject(DOCUMENT)
              private document: Document,
              private router: Router,
              public translate: TranslateService,
              private localize: LocalizeRouterService,
              private scrollInformationService: HomeInformationServices
            ) {}

  changeLanguage(event: Event, lang: string) {
    event.preventDefault();
    this.localize.changeLanguage(lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    this.scrollInformationService.getScrollTopStream()
      .subscribe( (place: number) => {
        this.homeInformationScrollTop = (place-1) * 101;
        this.parseScrollTop();
      })
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.windowScrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;
    this.parseScrollTop();
  }

  parseScrollTop(){
    this.scrollTop = this.windowScrollTop > this.homeInformationScrollTop ? this.windowScrollTop : this.homeInformationScrollTop;
  }




}
