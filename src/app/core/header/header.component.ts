import {Component, OnInit, Inject, HostListener, HostBinding} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Router, NavigationEnd} from '@angular/router';
import {HomeInformationServices} from '../../components/home-page/services/home-information.service';
import {LocalizeRouterService} from 'localize-router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  scrollTop = 0;
  windowScrollTop = 0;
  homeInformationScrollTop = 0;

  @HostBinding('class.hideBG') hiddenBG = false;
  private shouldHide = false;


  constructor(@Inject(DOCUMENT)
              private document: Document,
              private router: Router,
              private scrollInformationService: HomeInformationServices,
              private localize: LocalizeRouterService) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.parseScrollTop();
  }

  ngOnInit() {
    this.scrollTopStream();
    this.checkRoutes();
  }

  private scrollTopStream() {
    this.scrollInformationService.getScrollTopStream()
      .subscribe((scroll: number) => {
        this.homeInformationScrollTop = scroll;
        this.parseScrollTop();
      });
  }

  private parseScrollTop() {
    this.windowScrollTop = this.document.body.scrollTop || this.document.documentElement.scrollTop;
    this.scrollTop = this.windowScrollTop > this.homeInformationScrollTop ? this.windowScrollTop : this.homeInformationScrollTop;
    this.hideBackground();
  }

  private checkRoutes() {
    this.router.events.subscribe((state) => {
      this.moveTop(state);
      this.backgroundAnimation(state);
    })
  }

  private moveTop(state) {
    if (!(state instanceof NavigationEnd)) {
      return;
    }
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  private backgroundAnimation(state) {
    if (state instanceof NavigationEnd) {
      const translatedLink = this.localize.translateRoute('/home'),
            translatedSecoundLink = this.localize.translateRoute('/audit');

      if (translatedLink !== state.urlAfterRedirects && translatedSecoundLink !== state.urlAfterRedirects) {
        this.shouldHide = false;
      } else {
        this.shouldHide = true;
      }

      this.hideBackground();
    }
  }

  private hideBackground() {
    this.hiddenBG = this.shouldHide ? this.scrollTop < 100 : false;
  }
}
