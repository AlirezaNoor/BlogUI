import { TestBed } from '@angular/core/testing';

import { PostservicesService } from './postservices.service';

describe('PostservicesService', () => {
  let service: PostservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
