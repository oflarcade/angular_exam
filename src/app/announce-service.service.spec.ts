import { TestBed } from '@angular/core/testing';

import { AnnounceServiceService } from './announce-service.service';

describe('AnnounceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnounceServiceService = TestBed.get(AnnounceServiceService);
    expect(service).toBeTruthy();
  });
});
