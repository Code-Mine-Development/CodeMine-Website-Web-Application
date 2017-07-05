import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformationComponent } from './home-information.component';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {MockInformation} from '../../../shared/mocks/home-information.mock';
import {Observable} from 'rxjs/Observable';

describe('StartAnimationComponent', () => {
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInformationComponent],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteMock},
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
