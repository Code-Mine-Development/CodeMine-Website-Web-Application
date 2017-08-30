import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {AppComponent} from './app.component';
import {ContactService} from './aplication/contact/services/contact.service';
import {PortfolioService} from './aplication/portfolio/services/portfolio.service';


@Component({
  selector: 'app-header, app-footer',
  template: ''
})
class DummyComponent {
}

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const localizeRouterServiceMock = {
      parser: {
        locales: ['test', 'language', 'list'],
        currentLang: 'test'
      }
    },
    translateServiceMock = {
      getBrowserLang: () => 'language',
      addLangs: jasmine.createSpy('addLangs'),
      use: jasmine.createSpy('use'),
      setDefaultLang: jasmine.createSpy('setDefaultLang'),
      get: () => Observable.of("Test Prefix")
    },
    routerMock = {
      events: new Subject()
    },
    titleService = {
      setTitle: jasmine.createSpy('setTitle')
    }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: LocalizeRouterService, useValue: localizeRouterServiceMock},
        {provide: TranslateService, useValue: translateServiceMock},
        {provide: Router, useValue: routerMock},
        {provide: Title, useValue: titleService},
        ContactService,
        PortfolioService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    spyOn(app, 'selectLanguage').and.callThrough();
    spyOn(app, 'changeTitle').and.callThrough();
    fixture.detectChanges()

  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should run on Init', () => {
    expect(app.selectLanguage).toHaveBeenCalled();
    expect(app.changeTitle).toHaveBeenCalled();
  })

  it('should addLangs', () => {
    app.selectLanguage();
    expect(translateServiceMock.addLangs).toHaveBeenCalled()
  })

  it('should select currentLanguage', () => {
    TestBed.get(LocalizeRouterService).parser.currentLang = 'list';
    translateServiceMock.use.calls.reset()
    translateServiceMock.setDefaultLang.calls.reset()
    app.selectLanguage();
    expect(translateServiceMock.use).toHaveBeenCalledWith('list');
    expect(translateServiceMock.setDefaultLang).toHaveBeenCalledWith('list')
  })


  it('should select browserLang', () => {
    TestBed.get(LocalizeRouterService).parser.currentLang = '';
    translateServiceMock.use.calls.reset()
    translateServiceMock.setDefaultLang.calls.reset()
    app.selectLanguage();
    expect(translateServiceMock.use).toHaveBeenCalledWith('language');
    expect(translateServiceMock.setDefaultLang).toHaveBeenCalledWith('language')
  })

  it('title should be changed', fakeAsync(() => {
    TestBed.get(Router).events.next(new NavigationEnd(1, "test", "test/page"));
    tick();
    expect(titleService.setTitle).toHaveBeenCalledWith('Test Prefix | page')

  }))

});
