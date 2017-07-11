import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {WeCreateComponent} from './weCreate.component';
import {MockFeatures} from '../../../shared/mocks/features.mock';

@Component({
  selector: 'app-fake-we-create-wrapper',
  template: '<app-we-create [WeCreate]="WeCreate"></app-we-create>'
})

class FakeWrapperWeCreateComponent {
  WeCreate = MockFeatures;
}

describe('WeCreateComponent', () => {
  let component: WeCreateComponent;
  let fixture: ComponentFixture<FakeWrapperWeCreateComponent>;

  let fakeComponent: WeCreateComponent;
  let fakeFixture: ComponentFixture<WeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeWrapperWeCreateComponent, WeCreateComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperWeCreateComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(WeCreateComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.WeCreate = component.WeCreate;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
