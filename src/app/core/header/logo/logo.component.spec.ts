import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoComponent} from './logo.component';
import {Observable} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';


describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  const routerMock = {
      events: Observable.of(new NavigationEnd(3, "test", "test2"))
    },
    localizeRouterMock = {
      translateRoute: (val) => val
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: LocalizeRouterService, useValue: localizeRouterMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
