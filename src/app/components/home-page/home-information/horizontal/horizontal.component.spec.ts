import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalComponent } from './horizontal.component';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollController} from '../../services/scroll.controller';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';

 describe('HorizontalComponent', () => {
  let component: HorizontalComponent;
  let fixture: ComponentFixture<HorizontalComponent>;

  const scrollToMock = {
    scroll: jasmine.createSpy('scroll')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ HorizontalComponent ],
      providers: [
        ScrollController,
        {provide: ScrollToService, useValue: scrollToMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
