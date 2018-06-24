import { Injectable } from '@angular/core';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentProfileService {
  constructor(private http: HttpClient) {}

  saveProfile(formOutput: IFormOutput) {
    return this.http.post(`${environment.api}/form-output`, formOutput);
  }
}
