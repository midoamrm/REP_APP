import { TestBed } from '@angular/core/testing';

import { DataservService } from './dataserv.service';

describe('DataservService', () => {
  let service: DataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
