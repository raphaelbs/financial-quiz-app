import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EulaDialogComponent } from './eula-dialog/eula-dialog.component';
import { HomeComponent } from './home/home.component';

import { MatGridListModule, MatButtonModule } from '@angular/material';

const MaterialDesignModules = [MatGridListModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent, EulaDialogComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ...MaterialDesignModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
