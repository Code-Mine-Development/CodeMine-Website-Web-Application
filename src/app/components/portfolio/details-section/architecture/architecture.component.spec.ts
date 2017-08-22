import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureComponent } from './architecture.component';

describe('ArchitectureComponent', () => {
  let component: ArchitectureComponent;
  let fixture: ComponentFixture<ArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
