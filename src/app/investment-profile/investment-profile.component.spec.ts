import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed
} from '@angular/core/testing';

import { InvestmentProfileComponent } from './investment-profile.component';
import { FormInputModule } from '../base/form-input/form-input.module';
import { AppComponent } from '../app.component';
import { SummaryComponent } from '../summary/summary.component';
import { HomeComponent } from '../home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { MatCardModule } from '@angular/material';
import { InvestmentProfileService } from './investment-profile.service';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { of } from 'rxjs';
import { IFormInput } from '../base/form-input/form-input.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InvestmentProfileComponent', () => {
  let component: InvestmentProfileComponent;
  let fixture: ComponentFixture<InvestmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InvestmentProfileComponent,
        AppComponent,
        SummaryComponent,
        HomeComponent
      ],
      imports: [
        FormInputModule,
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        HttpClientTestingModule
      ],
      providers: [InvestmentProfileService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class InvestmentProfileServiceMock {
  saveProfile(formOutput: IFormOutput) {
    formOutput._id = '5b2fe50823dfe10758431c59';
    return of(formOutput);
  }

  getProfile() {
    return of({
      required: false,
      _id: '5b2fe50823dfe10758431c59',
      type: 'form',
      label: 'PERFIL DO INVESTIDOR - QUESTIONÁRIO',
      children: []
    } as IFormInput);
  }
}
