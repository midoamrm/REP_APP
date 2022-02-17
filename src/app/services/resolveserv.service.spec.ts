import { TestBed } from '@angular/core/testing';

import { ResolveservService } from './resolveserv.service';

describe('ResolveservService', () => {
  let service: ResolveservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
