import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ApproachComponent} from './approach.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../shared/shared.module';

describe('ApproachComponent', () => {
  let component: ApproachComponent;
  let fixture: ComponentFixture<ApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ ApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
