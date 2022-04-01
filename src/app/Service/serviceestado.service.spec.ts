import { TestBed } from '@angular/core/testing';

import { ServiceestadoService } from './serviceestado.service';

describe('ServiceestadoService', () => {
  let service: ServiceestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
