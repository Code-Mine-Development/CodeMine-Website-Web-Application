import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoListComponent } from './portfo-list.component';

describe('PortfoListComponent', () => {
  let component: PortfoListComponent;
  let fixture: ComponentFixture<PortfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
