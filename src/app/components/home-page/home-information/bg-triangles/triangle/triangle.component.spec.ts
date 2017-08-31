import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TriangleComponent} from './triangle.component';
import {Subject} from 'rxjs/Subject';
import {HomeInformationServices} from '../../../services/home-information.service';

describe('TriangleComponent', () => {
  let component: TriangleComponent;
  let fixture: ComponentFixture<TriangleComponent>;
  const homeInfo = {
    getScrollTopStream: () => new Subject()
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TriangleComponent],
      providers: [
        {provide: HomeInformationServices, useValue: homeInfo}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
