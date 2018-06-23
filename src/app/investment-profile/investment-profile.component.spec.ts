import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentProfileComponent } from './investment-profile.component';
import { FormInputModule } from '../base/form-input/form-input.module';

describe('InvestmentProfileComponent', () => {
  let component: InvestmentProfileComponent;
  let fixture: ComponentFixture<InvestmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentProfileComponent],
      imports: [FormInputModule]
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
