import { TestBed } from '@angular/core/testing';

import { CyclistService } from './cyclist.service';

describe('CyclistService', () => {
  let service: CyclistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyclistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
