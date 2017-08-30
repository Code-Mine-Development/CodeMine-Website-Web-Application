import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {HamburgerComponent} from './hamburger/hamburger.component';
import {FullSizeComponent} from './full-size/full-size.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Pipe, PipeTransform} from '@angular/core';
import {LocalizeRouterService} from 'localize-router';

@Pipe ({
  name: 'localize'
})
class localizePipeMock implements PipeTransform {
  transform(value: string) {
    return value;
  }
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  const localizeRouterMock = {
    translateRoute: (val) => val
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [ NavigationComponent, HamburgerComponent, FullSizeComponent, localizePipeMock ],
      providers: [
        {provide: LocalizeRouterService, useValue: localizeRouterMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
