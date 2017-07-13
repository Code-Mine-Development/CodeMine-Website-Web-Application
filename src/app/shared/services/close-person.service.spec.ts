import { TestBed, inject } from '@angular/core/testing';

import { ClosePersonService } from './close-person.service';

describe('ClosePersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClosePersonService]
    });
  });

  it('should be created', inject([ClosePersonService], (service: ClosePersonService) => {
    expect(service).toBeTruthy();
  }));
});
