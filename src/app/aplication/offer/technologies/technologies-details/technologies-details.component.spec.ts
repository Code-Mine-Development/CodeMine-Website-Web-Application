import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesDetailsComponent } from './technologies-details.component';

describe('TechnologiesDetailsComponent', () => {
  let component: TechnologiesDetailsComponent;
  let fixture: ComponentFixture<TechnologiesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
