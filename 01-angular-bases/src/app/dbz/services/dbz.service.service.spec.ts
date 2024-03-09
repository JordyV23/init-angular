/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dbz.serviceService } from './dbz.service.service';

describe('Service: Dbz.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dbz.serviceService]
    });
  });

  it('should ...', inject([Dbz.serviceService], (service: Dbz.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
