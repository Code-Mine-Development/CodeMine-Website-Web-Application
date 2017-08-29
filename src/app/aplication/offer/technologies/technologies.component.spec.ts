import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';

import {TechnologiesComponent} from './technologies.component';

import {OfferThumbnailsComponent} from '../../../shared/ui-elements/offer-thumbnails/offer-thumbnails.component';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {MockTechnologies} from '../../../shared/mocks/technologies.mock';



describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  const router = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        TechnologiesComponent,
        OfferThumbnailsComponent
      ],
      providers: [
        PreviousPositionService,
        {provide: Router, useValue: router},
        {
          provide: LocalizeRouterService,
          useValue: {
            translateRoute: (val) => val
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    component.Technologies = MockTechnologies;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have parsed elements', () => {
    expect(component.elements[0].key).toBe('bash');
  });

  it('should navigate', () => {
    component.navigate('test');
    expect(router.navigateByUrl).toHaveBeenCalledWith('test');
  })
});
