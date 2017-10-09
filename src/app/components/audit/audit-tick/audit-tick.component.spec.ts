import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AuditTickComponent} from './audit-tick.component';

describe('AuditTickComponent', () => {
  let component: AuditTickComponent;
  let fixture: ComponentFixture<AuditTickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditTickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
