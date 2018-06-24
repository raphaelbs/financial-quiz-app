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

  filterRadioOption(form: IFormInput) {
    return form.type === 'radio-option';
  }

  filterSelect(form: IFormInput) {
    return form.type === 'select';
  }

  filterSelectOption(form: IFormInput) {
    return form.type === 'select-option';
  }

  filterKeyValueTree(form: IFormInput): KeyValueTree {
    let children;
    if (form.children) {
      children = form.children
        .map(this.filterKeyValueTree, this)
        .filter(f => !!(f.key && f.value));
    }
    return {
      key: form.key,
      value: form.value,
      children: children && children.length > 0 ? children : undefined
    } as KeyValueTree;
  }
}

interface KeyValueTree {
  key: string;
  value: any;
  children?: KeyValueTree[];
}
