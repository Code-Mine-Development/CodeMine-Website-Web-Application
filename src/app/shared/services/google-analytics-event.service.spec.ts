import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsEventService } from './google-analytics-event.service';

describe('GoogleAnalyticsEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsEventService]
    });
  });

  it('should be created', inject([GoogleAnalyticsEventService], (service: GoogleAnalyticsEventService) => {
    expect(service).toBeTruthy();
  }));
});
