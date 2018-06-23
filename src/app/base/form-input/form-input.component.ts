import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormInput } from './form-input.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() public form: IFormInput;
  @Output() formSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  submit() {
    this.formSubmit.emit({});
  }
}
