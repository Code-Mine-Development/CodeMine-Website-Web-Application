import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeInformationComponent} from './home-information.component';
import {ActivatedRoute, Data} from '@angular/router';
import {MockInformation} from '../../../shared/mocks/home-information.mock';
import {Observable} from 'rxjs/Observable';
import {HorizontalComponent} from './horizontal/horizontal.component';
import {TranslateModule} from '@ngx-translate/core';
import {HomeInformationServices} from '../services/home-information.service';
import {HttpModule} from '@angular/http';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollController} from '../services/scroll.controller';
import {Component} from '@angular/core';

@Component({
  selector: 'app-home-information-content',
  template: ''
})
class MockHomeInformationMockComponent {

}

describe('HomeInformationComponent', () => {
  let component: HomeInformationComponent;
  let fixture: ComponentFixture<HomeInformationComponent>;
  class ActivatedRouteMock {
    snapshot = {
      data: {
        message: 'Edit',
      },
      params: {
        id: null,
      }
    };
    data: Observable<Data>;

    constructor() {
      this.data = Observable.of({informations: {data: MockInformation}});
    }
  }

  const scrollToMock = {
    scroll: jasmine.createSpy('scroll')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpModule
      ],
      declarations: [
        HomeInformationComponent,
        HorizontalComponent,
        MockHomeInformationMockComponent
      ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
        HomeInformationServices,
        {provide: ScrollToService, useValue: scrollToMock},
        ScrollController
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
