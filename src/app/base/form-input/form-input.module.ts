import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [CommonModule, MatCardModule, FlexLayoutModule, AppRoutingModule],
  declarations: [FormInputComponent],
  exports: [FormInputComponent]
})
export class FormInputModule {}
