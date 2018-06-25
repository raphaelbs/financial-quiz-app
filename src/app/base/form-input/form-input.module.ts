import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input.component';
import { MatRadioModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../../app-routing.module';
import { BasePipe } from './base-pipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [FormInputComponent, BasePipe],
  exports: [FormInputComponent]
})
export class FormInputModule {}
