import { TestBed } from '@angular/core/testing';

import { MatcherServiceService } from './matcher-service.service';

describe('MatcherServiceService', () => {
  let service: MatcherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
