import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './tools.component';
import {Component} from '@angular/core';
import {MockLanguage} from '../../../shared/mocks/language.mock';

@Component({
  selector: 'app-fake-language-wrapper',
  template: '<app-tools [Languages]="language"></app-tools>'
})

class FakeWrapperLanguagesComponent {
  language = MockLanguage;
}

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<FakeWrapperLanguagesComponent>;

  let fakeComponent: LanguagesComponent;
  let fakeFixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeWrapperLanguagesComponent, LanguagesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperLanguagesComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(LanguagesComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.Languages = component.Languages;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
