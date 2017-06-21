import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAnimationComponent } from './start-animation.component';

describe('StartAnimationComponent', () => {
  let component: StartAnimationComponent;
  let fixture: ComponentFixture<StartAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
