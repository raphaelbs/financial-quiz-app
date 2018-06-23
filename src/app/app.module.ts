import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EulaDialogComponent } from './eula-dialog/eula-dialog.component';
import { EulaService } from './eula-dialog/eula.service';
import { InvestmentProfileComponent } from './investment-profile/investment-profile.component';
import { FormInputComponent } from './base/form-input/form-input.component';

import {
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

const MaterialDesignModules = [
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MatCheckboxModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    EulaDialogComponent,
    HomeComponent,
    InvestmentProfileComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MaterialDesignModules
  ],
  entryComponents: [EulaDialogComponent],
  providers: [
    EulaService,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        width: '800px'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
