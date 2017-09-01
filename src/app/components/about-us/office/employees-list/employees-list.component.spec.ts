import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {EmployeesListComponent} from './employees-list.component';

import {EmployeeComponent} from './employee.component';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DOCUMENT} from '@angular/common';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  const scrollToServiceMock = {
    scroll: jasmine.createSpy('scroll')
  }
  const documentMock = document;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      declarations: [EmployeesListComponent, EmployeeComponent],
      providers: [
        {provide: ScrollToService, useValue: scrollToServiceMock},
        {provide: DOCUMENT, useValue: documentMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should detect scroll top', () => {
    expect(component.checkTopPosition()).toBe(false);
  });

  it('should scroll top ', () => {

    spyOn(component, 'checkTopPosition').and.returnValue(true);
    component.onScroll();
    expect(scrollToServiceMock.scroll).toHaveBeenCalled()
  })
});
