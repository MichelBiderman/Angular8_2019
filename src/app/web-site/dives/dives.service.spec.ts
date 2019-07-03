import { TestBed } from '@angular/core/testing';

import { DivesService } from './dives.service';

describe('DivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivesService = TestBed.get(DivesService);
    expect(service).toBeTruthy();
  });
});
