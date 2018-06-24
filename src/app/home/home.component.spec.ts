import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { MatCardModule, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { routes } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { InvestmentProfileComponent } from '../investment-profile/investment-profile.component';
import { FormInputModule } from '../base/form-input/form-input.module';
import { SummaryComponent } from '../summary/summary.component';
class EulaDialogMock {
  open() {
    return {
      afterClosed: () => of([false])
    };
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InvestmentProfileComponent,
        HomeComponent,
        SummaryComponent
      ],
      imports: [
        MatCardModule,
        FormInputModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: MatDialog, useClass: EulaDialogMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { eula: { label: 'label', eula: 'eula' } } }
          }
        },
        { provide: Router, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
