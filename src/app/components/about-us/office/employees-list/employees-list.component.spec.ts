import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {EmployeesListComponent} from './employees-list.component';
import {EmployeeComponent} from './employee.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DOCUMENT} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  const documentMock = document;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        SharedModule
      ],
      declarations: [EmployeesListComponent, EmployeeComponent],
      providers: [
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
});
