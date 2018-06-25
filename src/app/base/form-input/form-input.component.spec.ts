import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import {
  MatCardModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasePipe } from './base-pipe.pipe';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputComponent, BasePipe],
      imports: [MatCardModule, MatRadioModule, MatSelectModule, FormsModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: `app-test-host-component`,
  template: `<app-form-input input="test input"></app-form-input>`
})
class TestHostComponent {}
