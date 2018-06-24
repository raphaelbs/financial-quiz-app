import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { SummaryService } from './summary.service';

@Injectable()
export class SummaryResolver implements Resolve<IFormOutput> {
  constructor(private summaryService: SummaryService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IFormOutput> {
    return this.summaryService.findSummary(route.paramMap.get('userId'));
  }
}
