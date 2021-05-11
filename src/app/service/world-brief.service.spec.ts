import { TestBed } from '@angular/core/testing';

import { WorldBriefService } from './world-brief.service';

describe('WorldBriefService', () => {
  let service: WorldBriefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldBriefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
