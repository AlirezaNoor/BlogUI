import { TestBed } from '@angular/core/testing';

import { CategoryserviecService } from './categoryserviec.service';

describe('CategoryserviecService', () => {
  let service: CategoryserviecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryserviecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
