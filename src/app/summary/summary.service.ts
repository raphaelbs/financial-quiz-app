import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor(private http: HttpClient) {}

  findSummary(userId: string) {
    if (userId) {
      return this.http.get(
        `${environment.api}/form-output/id/${userId}`
      ) as Observable<IFormOutput>;
    }
    return of(null);
  }
}
