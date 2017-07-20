import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServiceComponent } from './social-service.component';

describe('SocialServiceComponent', () => {
  let component: SocialServiceComponent;
  let fixture: ComponentFixture<SocialServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
