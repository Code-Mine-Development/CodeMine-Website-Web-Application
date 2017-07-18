import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTrianglesComponent } from './bg-triangles.component';

describe('BgTrianglesComponent', () => {
  let component: BgTrianglesComponent;
  let fixture: ComponentFixture<BgTrianglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgTrianglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgTrianglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
