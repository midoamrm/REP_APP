import { TestBed } from '@angular/core/testing';

import { RepdataService } from './repdata.service';

describe('RepdataService', () => {
  let service: RepdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
