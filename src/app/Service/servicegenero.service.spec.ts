import { TestBed } from '@angular/core/testing';

import { ServicegeneroService } from './servicegenero.service';

describe('ServicegeneroService', () => {
  let service: ServicegeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicegeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
