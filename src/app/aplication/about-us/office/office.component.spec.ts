import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfficeComponent} from './office.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-office',
  template: '<header style="height: 50px"></header>',
})
export class MockHeaderComponent {

}

describe('OfficeComponent', () => {
  let component: OfficeComponent;
  let fixture: ComponentFixture<OfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockHeaderComponent, OfficeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
