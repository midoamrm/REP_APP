import { TestBed } from '@angular/core/testing';

import { DetdataservService } from './detdataserv.service';

describe('DetdataservService', () => {
  let service: DetdataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetdataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
