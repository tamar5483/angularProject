import { TestBed } from '@angular/core/testing';

import { SercrateryGuard } from './sercratery.guard';

describe('SercrateryGuard', () => {
  let guard: SercrateryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SercrateryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
