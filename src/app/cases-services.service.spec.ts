import { TestBed } from '@angular/core/testing';

import { CasesServicesService } from './cases-services.service';

describe('CasesServicesService', () => {
  let service: CasesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
