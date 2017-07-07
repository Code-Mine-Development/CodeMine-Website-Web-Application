import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {MockTechnologies} from '../../../shared/mocks/technologies.mock';
import {TechnologiesComponent} from './technologies.component';

@Component({
  selector: 'app-fake-technologies-wrapper',
  template: '<app-technologies [Technologies]="technologies"></app-technologies>'
})

class FakeWrapperTechnologiesComponent {
  technologies = MockTechnologies;
}

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<FakeWrapperTechnologiesComponent>;

  let fakeComponent: TechnologiesComponent;
  let fakeFixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeWrapperTechnologiesComponent, TechnologiesComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperTechnologiesComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(TechnologiesComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.Technologies = component.Technologies;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
