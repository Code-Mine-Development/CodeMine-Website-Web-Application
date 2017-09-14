import { TestBed, inject } from '@angular/core/testing';

import { CopyToClipboardService } from './copy-to-clipboard.service';

describe('CopyToClipboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CopyToClipboardService]
    });
  });

  it('should be created', inject([CopyToClipboardService], (service: CopyToClipboardService) => {
    expect(service).toBeTruthy();
  }));
});
