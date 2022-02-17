import { TestBed } from '@angular/core/testing';

import { AutservService } from './autserv.service';

describe('AutservService', () => {
  let service: AutservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
