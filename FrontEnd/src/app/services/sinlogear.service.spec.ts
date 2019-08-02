import { TestBed } from '@angular/core/testing';

import { SinlogearService } from './sinlogear.service';

describe('SinlogearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinlogearService = TestBed.get(SinlogearService);
    expect(service).toBeTruthy();
  });
});
