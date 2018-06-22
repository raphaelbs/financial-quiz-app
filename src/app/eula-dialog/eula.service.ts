import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEula } from './eula.interface';

@Injectable({
  providedIn: 'root'
})
export class EulaService {
  constructor(private http: HttpClient) {}

  findEula() {
    return this.http.get(
      `${environment.api}/eula/id/5b287432aa53f735bc73806d`
    ) as Observable<IEula>;
  }
}
