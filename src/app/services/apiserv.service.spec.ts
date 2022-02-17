import { TestBed } from '@angular/core/testing';

import { ApiservService } from './apiserv.service';

describe('ApiservService', () => {
  let service: ApiservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
