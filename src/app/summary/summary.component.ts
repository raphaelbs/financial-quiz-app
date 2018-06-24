import { Component, OnInit } from '@angular/core';
import { IFormOutput } from '../base/form-input/form-output.interface';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  formOutputs: IFormOutput[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const formOutput: IFormOutput = this.route.snapshot.data['formOutput'];
    if (formOutput) {
      this.formOutputs = Flatten(formOutput);
    }
  }
}

function Flatten(obj) {
  const array = Array.isArray(obj) ? obj : [obj];
  return array.reduce(function(acc, value) {
    acc.push(value);
    if (value.children) {
      acc = acc.concat(Flatten(value.children));
      delete value.children;
    }
    return acc;
  }, []);
}
