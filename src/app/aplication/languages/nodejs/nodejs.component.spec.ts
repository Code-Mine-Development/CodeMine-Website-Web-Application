import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsComponent } from './nodejs.component';

describe('NodejsComponent', () => {
  let component: NodejsComponent;
  let fixture: ComponentFixture<NodejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
