import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EulaDialogComponent } from './eula-dialog/eula-dialog.component';
import { HomeComponent } from './home/home.component';

import {
  MatGridListModule,
  MatButtonModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const MaterialDesignModules = [
  MatGridListModule,
  MatButtonModule,
  MatDialogModule
];

@NgModule({
  declarations: [AppComponent, EulaDialogComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MaterialDesignModules
  ],
  entryComponents: [EulaDialogComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
