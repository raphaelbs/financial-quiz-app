import { Component, OnInit, Input } from '@angular/core';
import { IFormInput } from './form-input.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() formInput: IFormInput;

  constructor() {}

  ngOnInit() {}
}
