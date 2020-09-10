import { TestBed } from '@angular/core/testing';

import { LoadindGuardGuard } from './loadind-guard.guard';

describe('LoadindGuardGuard', () => {
  let guard: LoadindGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadindGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
