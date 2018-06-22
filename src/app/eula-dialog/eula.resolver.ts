import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { IEula } from './eula.interface';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { EulaService } from './eula.service';

@Injectable()
export class EulaResolver implements Resolve<IEula> {
  constructor(private eulaService: EulaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IEula> {
    return this.eulaService.findEula();
  }
}
