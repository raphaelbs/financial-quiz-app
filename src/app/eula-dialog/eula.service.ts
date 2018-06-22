import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEula } from './eula.interface';

@Injectable()
export class EulaService {
  public readonly termoId: string = '5b2c3c0182d97c174cc37667';
  constructor(private http: HttpClient) {}

  findEula() {
    return this.http.get(
      `${environment.api}/eula/id/${this.termoId}`
    ) as Observable<IEula>;
  }
}
