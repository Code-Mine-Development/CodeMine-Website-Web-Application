import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformationContentComponent } from './home-information-content.component';

describe('HomeInformationContentComponent', () => {
  let component: HomeInformationContentComponent;
  let fixture: ComponentFixture<HomeInformationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInformationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
