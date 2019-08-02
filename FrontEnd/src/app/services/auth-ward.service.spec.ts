import { TestBed } from '@angular/core/testing';

import { AuthWardService } from './auth-ward.service';

describe('AuthWardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthWardService = TestBed.get(AuthWardService);
    expect(service).toBeTruthy();
  });
});
