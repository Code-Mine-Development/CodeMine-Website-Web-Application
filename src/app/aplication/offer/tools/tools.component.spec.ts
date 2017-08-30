import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolsComponent} from './tools.component';
import {MockTools} from '../../../shared/mocks/tools.mock';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';
import {Router} from '@angular/router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {OfferThumbnailsComponent} from '../../../shared/ui-elements/offer-thumbnails/offer-thumbnails.component';


describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  const router = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        ToolsComponent,
        OfferThumbnailsComponent
      ],
      providers: [
        PreviousPositionService,
        {
          provide: LocalizeRouterService,
          useValue: {
            translateRoute: (val) => val
          }
        },
        {provide: Router, useValue: router}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    component.Tools = MockTools;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have parsed elements', () => {
    expect(component.elements[0].key).toBe('adobe-illustrator');
  });

  it('should navigate', () => {
    component.navigate('test');
    expect(router.navigateByUrl).toHaveBeenCalledWith('test');
  })
});
