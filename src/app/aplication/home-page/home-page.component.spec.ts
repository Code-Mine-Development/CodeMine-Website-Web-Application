import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageComponent} from './home-page.component';
import {HomeInformationComponent} from '../../components/home-page/home-information/home-information.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {ContactComponentModule} from '../../components/contact/contact-components.module';
import {MockCompany} from '../../shared/mocks/company.mock';
import {MockCarousel} from '../../shared/mocks/carousel.mock';
import {Component} from '@angular/core';
import {LocalizeRouterModule, LocalizeRouterService} from 'localize-router';
import {HomeInformationServices} from '../../components/home-page/services/home-information.service';
import {ScrollController} from '../../components/home-page/services/scroll.controller';
import {TranslateModule} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-bg-triangles',
  template: 'test',
  styles: []
})
class BgComponent {
}

@Component({
  selector: 'app-home-information-content',
  template: 'test',
  styles: []
})
class InfoComponent {
}

@Component({
  selector: 'app-horizontal',
  template: 'test',
  styles: []
})
class HorizontalComponent {
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  const router = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        UiModule,
        ContactComponentModule,
        LocalizeRouterModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      declarations: [
        HomePageComponent,
        HomeInformationComponent,
        BgComponent,
        InfoComponent,
        HorizontalComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                company: MockCompany,
                carousel: MockCarousel
              })
            }
          }
        },
        {provide: Router, useValue: router},
        {
          provide: LocalizeRouterService, useValue: {
            translateRoute: (val) => val
          }
        },
        HomeInformationServices,
        ScrollController
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should define our company variable', () => {
    expect(component.company).toBeDefined();
  });

  it('should define our portfolio variable', () => {
    expect(component.carousel).toBeDefined();
  });

  it('should navigate', () => {
    component.onNavigate('test');
    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('test');
  })

});
