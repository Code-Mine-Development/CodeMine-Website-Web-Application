import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInformationsComponent } from './company-informations.component';

describe('CompanyInformationsComponent', () => {
  let component: CompanyInformationsComponent;
  let fixture: ComponentFixture<CompanyInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
