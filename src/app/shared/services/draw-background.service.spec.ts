import { TestBed, inject } from '@angular/core/testing';

import { DrawBackgroundService } from './draw-background.service';

describe('DrawBackgroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawBackgroundService]
    });
  });

  it('should be created', inject([DrawBackgroundService], (service: DrawBackgroundService) => {
    expect(service).toBeTruthy();
  }));
});
