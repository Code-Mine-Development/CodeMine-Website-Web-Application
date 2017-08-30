import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformationComponent } from './home-information.component';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {MockInformation} from '../../../shared/mocks/home-information.mock';
import {Observable} from 'rxjs/Observable';
import {SloganSectionComponent} from './content/slogan-section/slogan-section.component';
import {CtaToFormComponent} from './content/cta-to-form/cta-to-form.component';
import {LanguageComponent} from './content/language/language.component';
import {KnowledgeComponent} from './content/knowledge/knowledge.component';
import {SpecificationComponent} from './content/specification/specification.component';
import {ImplementationComponent} from './content/implementation/implementation.component';
import {SecondImplementationComponent} from './content/second-implementation/second-implementation.component';
import {SupportComponent} from './content/support/support.component';
import {BgTrianglesComponent} from './bg-triangles/bg-triangles.component';
import {TriangleComponent} from './bg-triangles/triangle/triangle.component';
import {HomeInformationContentComponent} from './content/home-information-content.component';
import {HorizontalComponent} from './horizontal/horizontal.component';
import {TranslateModule} from '@ngx-translate/core';
import {HowWeWorkComponent} from './content/how-we-work/how-we-work.component';
import {UiUxComponent} from './content/ui-ux/ui-ux.component';
import {LogicComponent} from './content/logic/logic.component';
import {HomeInformationServices} from '../services/home-information.service';
import {HttpModule} from '@angular/http';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollController} from '../services/scroll.controller';

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
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpModule
      ],
      declarations: [
        HomeInformationComponent,
        SloganSectionComponent,
        CtaToFormComponent,
        LanguageComponent,
        KnowledgeComponent,
        SpecificationComponent,
        ImplementationComponent,
        SecondImplementationComponent,
        SupportComponent,
        BgTrianglesComponent,
        TriangleComponent,
        HomeInformationContentComponent,
        HowWeWorkComponent,
        UiUxComponent,
        LogicComponent,
        HorizontalComponent
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
