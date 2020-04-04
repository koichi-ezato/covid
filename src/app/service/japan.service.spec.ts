import { TestBed } from '@angular/core/testing';

import { JapanService } from './japan.service';

describe('JapanService', () => {
  let service: JapanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JapanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
