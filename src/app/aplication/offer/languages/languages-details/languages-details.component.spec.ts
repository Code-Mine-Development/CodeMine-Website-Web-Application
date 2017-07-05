import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDetailsComponent } from './languages-details.component';

describe('LanguagesDetailsComponent', () => {
  let component: LanguagesDetailsComponent;
  let fixture: ComponentFixture<LanguagesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
