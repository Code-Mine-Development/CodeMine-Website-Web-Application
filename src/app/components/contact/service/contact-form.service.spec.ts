import {TestBed, inject} from '@angular/core/testing';

import {ContactFormService} from './contact-form.service';
import {Http} from '@angular/http';

describe('ContactFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactFormService,
        {
          provide: Http, useValue: {
          post: jasmine.createSpy('post')
        }
        }
      ]
    });
  });

  it('should be created', inject([ContactFormService], (service: ContactFormService) => {
    expect(service).toBeTruthy();
  }));
});
