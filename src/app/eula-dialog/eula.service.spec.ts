import { TestBed, inject } from '@angular/core/testing';

import { EulaService } from './eula.service';
import { HttpClientModule } from '@angular/common/http';

describe('EulaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EulaService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([EulaService], (service: EulaService) => {
    expect(service).toBeTruthy();
  }));
});
