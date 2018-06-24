import { TestBed, inject } from '@angular/core/testing';

import { InvestmentProfileService } from './investment-profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvestmentProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentProfileService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject(
    [InvestmentProfileService],
    (service: InvestmentProfileService) => {
      expect(service).toBeTruthy();
    }
  ));
});
