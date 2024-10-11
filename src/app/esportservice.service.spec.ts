import { TestBed } from '@angular/core/testing';

import { EsportserviceService } from './esportservice.service';

describe('EsportserviceService', () => {
  let service: EsportserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsportserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
