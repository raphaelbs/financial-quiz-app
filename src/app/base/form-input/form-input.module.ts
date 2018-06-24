import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import {
  MatCardModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../app-routing.module';
import { BasePipePipe } from './base-pipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [FormInputComponent, BasePipePipe],
  exports: [FormInputComponent]
})
export class FormInputModule {}
