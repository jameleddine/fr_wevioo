import { TestBed, inject } from '@angular/core/testing';

import { MycrudService } from './mycrud.service';

describe('MycrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycrudService]
    });
  });

  it('should be created', inject([MycrudService], (service: MycrudService) => {
    expect(service).toBeTruthy();
  }));
});
