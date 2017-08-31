import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformationContentComponent } from './home-information-content.component';
import {HomePageComponentModule} from '../../home-page-components.module';
import {TranslateModule} from '@ngx-translate/core';

describe('HomeInformationContentComponent', () => {
  let component: HomeInformationContentComponent;
  let fixture: ComponentFixture<HomeInformationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomePageComponentModule,
        TranslateModule.forRoot()
      ],
      declarations: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
