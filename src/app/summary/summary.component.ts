import { Component, OnInit } from '@angular/core';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  formOutput: IFormOutput;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.formOutput = this.route.snapshot.data['formOutput'];
  }
}
