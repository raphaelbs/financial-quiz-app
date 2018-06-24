import { Injectable } from '@angular/core';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IFormInput } from '../base/form-input/form-input.interface';

@Injectable()
export class InvestmentProfileService {
  private readonly formProfile: string = '5b2fe50823dfe10758431c59';

  constructor(private http: HttpClient) {}

  saveProfile(formOutput: IFormOutput) {
    return this.http.post(`${environment.api}/form-output`, formOutput);
  }

  getProfile() {
    return this.http.get(
      `${environment.api}/form-input/id/${this.formProfile}`
    ) as Observable<IFormInput>;
  }
}
