import { Component, OnInit } from '@angular/core';
import { IFormInput } from '../base/form-input/form-input.interface';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { InvestmentProfileService } from './investment-profile.service';

@Component({
  selector: 'app-investment-profile',
  templateUrl: './investment-profile.component.html',
  styleUrls: ['./investment-profile.component.scss']
})
export class InvestmentProfileComponent implements OnInit {
  form: IFormInput;
  formOutput: IFormOutput;
  error: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private investmentProfileService: InvestmentProfileService
  ) {
    // 5b2fe50823dfe10758431c59
    this.form = this.route.snapshot.data['form'];
  }

  ngOnInit() {}

  formChanged(formOutput: IFormOutput) {
    this.formOutput = formOutput;
  }

  formSubmit() {
    this.error = undefined;
    this.investmentProfileService.saveProfile(this.formOutput).subscribe(
      (formOutput: IFormOutput) => {
        this.router.navigate(['/sumario'], {
          queryParams: {
            userId: formOutput._id
          }
        });
      },
      e => {
        this.error = e;
      }
    );
  }

  back() {}
}
