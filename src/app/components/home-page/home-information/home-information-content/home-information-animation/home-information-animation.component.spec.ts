import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeInformationAnimationComponent} from './home-information-animation.component';

describe('HomeInformationAnimationComponent', () => {
  let component: HomeInformationAnimationComponent;
  let fixture: ComponentFixture<HomeInformationAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInformationAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformationAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
