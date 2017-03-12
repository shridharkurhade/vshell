import { TestBed, inject } from '@angular/core/testing';

import { VshellServiceService } from './vshell-service.service';

describe('VshellServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VshellServiceService]
    });
  });

  it('should ...', inject([VshellServiceService], (service: VshellServiceService) => {
    expect(service).toBeTruthy();
  }));
});
