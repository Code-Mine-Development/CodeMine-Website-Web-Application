import { TestBed, inject } from '@angular/core/testing';

import { TechnologiesService } from './technologies.service';

describe('TechnologiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnologiesService]
    });
  });

  it('should be created', inject([TechnologiesService], (service: TechnologiesService) => {
    expect(service).toBeTruthy();
  }));
});
