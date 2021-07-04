import { TestBed } from '@angular/core/testing';

import { PartTowService } from './part-tow.service';

describe('PartTowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartTowService = TestBed.get(PartTowService);
    expect(service).toBeTruthy();
  });
});
