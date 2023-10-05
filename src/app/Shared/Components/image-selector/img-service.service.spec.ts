import { TestBed } from '@angular/core/testing';

import { ImgServiceService } from './img-service.service';

describe('ImgServiceService', () => {
  let service: ImgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
