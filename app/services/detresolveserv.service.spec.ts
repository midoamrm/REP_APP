import { TestBed } from '@angular/core/testing';

import { DetresolveservService } from './detresolveserv.service';

describe('DetresolveservService', () => {
  let service: DetresolveservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetresolveservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
