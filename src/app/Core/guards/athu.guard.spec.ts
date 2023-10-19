import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { athuGuard } from './athu.guard';

describe('athuGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => athuGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
