import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormInput } from './form-input.interface';
import { FilterFormOutput, IFormOutput } from './form-output.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() public form: IFormInput;
  @Output() formChanged = new EventEmitter<IFormOutput>();

  constructor() {}

  ngOnInit() {}

  updateFormOutput() {
    this.formChanged.emit(this.filterFormOutput(this.form));
  }

  filterRadioOption(form: IFormInput) {
    return form.type === 'radio-option';
  }

  filterSelect(form: IFormInput) {
    return form.type === 'select';
  }

  filterSelectOption(form: IFormInput) {
    return form.type === 'select-option';
  }

  filterFormOutput(form: IFormInput): IFormOutput {
    let children;
    if (form.children) {
      children = form.children
        .map(this.filterFormOutput, this)
        .filter(FilterFormOutput);
    }
    return {
      question: form.label,
      anwser: form.value,
      children: children && children.length > 0 ? children : undefined
    } as IFormOutput;
  }
}
