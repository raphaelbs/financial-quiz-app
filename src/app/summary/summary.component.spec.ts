import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { InvestmentProfileComponent } from '../investment-profile/investment-profile.component';
import { HomeComponent } from '../home/home.component';
import { MatCardModule } from '@angular/material';
import { FormInputModule } from '../base/form-input/form-input.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SummaryComponent,
        AppComponent,
        InvestmentProfileComponent,
        HomeComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatCardModule,
        FormInputModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
