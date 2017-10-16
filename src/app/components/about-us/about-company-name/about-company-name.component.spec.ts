import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AboutCompanyNameComponent} from './about-company-name.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../shared/shared.module';

describe('AboutCompanyComponent', () => {
  let component: AboutCompanyNameComponent;
  let fixture: ComponentFixture<AboutCompanyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ AboutCompanyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCompanyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
