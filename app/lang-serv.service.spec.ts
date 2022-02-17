import { TestBed } from '@angular/core/testing';

import { LangServService } from './lang-serv.service';

describe('LangServService', () => {
  let service: LangServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
