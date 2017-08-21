import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferThumbnailsComponent } from './offer-thumbnails.component';

describe('OfferThumbnailsComponent', () => {
  let component: OfferThumbnailsComponent;
  let fixture: ComponentFixture<OfferThumbnailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
