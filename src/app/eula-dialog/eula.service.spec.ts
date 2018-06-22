import { TestBed, inject } from '@angular/core/testing';

import { EulaService } from './eula.service';

describe('EulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EulaService]
    });
  });

  it('should be created', inject([EulaService], (service: EulaService) => {
    expect(service).toBeTruthy();
  }));
});
