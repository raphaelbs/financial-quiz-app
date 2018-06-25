import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { InvestmentProfileService } from './investment-profile.service';
import { IFormInput } from '../base/form-input/form-input.interface';

@Injectable()
export class InvestmentProfileResolver implements Resolve<IFormInput> {
  constructor(private investmentProfileService: InvestmentProfileService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IFormInput> {
    return this.investmentProfileService.getProfile();
  }
}
