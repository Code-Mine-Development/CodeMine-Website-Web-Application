import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesDetailsComponent } from './languages-details.component';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {MockLanguage} from "../../../../shared/mocks/language.mock";

describe('LanguagesDetailsComponent', () => {
  let component: LanguagesDetailsComponent;
  let fixture: ComponentFixture<LanguagesDetailsComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesDetailsComponent],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
