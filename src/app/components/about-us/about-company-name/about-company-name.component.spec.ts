import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompanyNameComponent } from './about-company-name.component';

describe('AboutCompanyComponent', () => {
  let component: AboutCompanyNameComponent;
  let fixture: ComponentFixture<AboutCompanyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
