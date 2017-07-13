import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkingComponent } from './social-networking.component';

describe('SocialNetworkingComponent', () => {
  let component: SocialNetworkingComponent;
  let fixture: ComponentFixture<SocialNetworkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
