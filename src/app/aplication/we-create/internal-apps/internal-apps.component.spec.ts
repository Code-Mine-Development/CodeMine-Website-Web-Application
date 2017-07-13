import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalAppsComponent } from './internal-apps.component';

describe('InternalAppsComponent', () => {
  let component: InternalAppsComponent;
  let fixture: ComponentFixture<InternalAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
