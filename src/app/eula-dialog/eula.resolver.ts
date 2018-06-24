import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IEula } from './eula.interface';
import { EulaService } from './eula.service';
import { Resolve } from '@angular/router';

@Injectable()
export class EulaResolver implements Resolve<IEula> {
  constructor(private eulaService: EulaService) {}

  resolve(): Observable<IEula> {
    return this.eulaService.findEula();
  }
}
