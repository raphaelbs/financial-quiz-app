import { TestBed, inject } from '@angular/core/testing';

import { InvestmentProfileService } from './investment-profile.service';

describe('InvestmentProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentProfileService]
    });
  });

  it('should be created', inject([InvestmentProfileService], (service: InvestmentProfileService) => {
    expect(service).toBeTruthy();
  }));
});
