import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeInformationTextComponent} from './home-information-text.component';

describe('HomeInformationTextComponent', () => {
  let component: HomeInformationTextComponent;
  let fixture: ComponentFixture<HomeInformationTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInformationTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
