import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterModule, ActivatedRoute, Router} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Observable} from 'rxjs/Observable';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AboutUsComponent} from './about-us.component';
import {AboutUsComponentModule} from '../../components/about-us/about-us-components.module';
import {MockCompany} from '../../shared/mocks/company.mock';
import {LocalizeRouterService} from 'localize-router';


const ActivatedRouteMock = {
    data: Observable.of({company: MockCompany})
  }

const translations: any = {'TEST': 'This is a test'};
class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}


describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;
  const router = {
      navigate: jasmine.createSpy('navigate'),
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AboutUsComponentModule,
        RouterModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader}
        }),
        NoopAnimationsModule
      ],
      declarations: [AboutUsComponent],
      providers: [
        {provide: ActivatedRoute, useValue: ActivatedRouteMock},
        {provide: Router, useValue: router},
        {
          provide: LocalizeRouterService,
          useValue: {
            translateRoute: (val) => val
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should get datas', () => {
    expect(component.company).toBe(MockCompany);
  })

});

