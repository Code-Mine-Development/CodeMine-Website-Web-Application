import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTrianglesComponent } from './bg-triangles.component';
import {Component, Input} from '@angular/core';
import {Point} from '../../../../shared/interface/point.interface';

@Component({
  selector: 'app-triangle',
  template: 'test',
  styles: []
})
class Triangles{
  @Input('position') position: Point;
  @Input('size') size: number;
  @Input('range') range: number;
  @Input('color') color: string;
}

describe('BgTrianglesComponent', () => {
  let component: BgTrianglesComponent;
  let fixture: ComponentFixture<BgTrianglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgTrianglesComponent, Triangles ]
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
