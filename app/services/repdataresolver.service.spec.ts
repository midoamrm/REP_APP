import { TestBed } from '@angular/core/testing';

import { RepdataresolverService } from './repdataresolver.service';

describe('RepdataresolverService', () => {
  let service: RepdataresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepdataresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
