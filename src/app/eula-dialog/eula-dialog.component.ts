import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IEula } from './eula.interface';
import { EulaResolver } from './eula.resolver';

@Component({
  selector: 'app-eula-dialog',
  templateUrl: './eula-dialog.component.html',
  styleUrls: ['./eula-dialog.component.scss'],
  providers: [EulaResolver]
})
export class EulaDialogComponent implements OnInit {
  eulaAccepted: boolean;
  answerProfile: boolean;
  eula: IEula;

  constructor(
    public dialogRef: MatDialogRef<EulaDialogComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    private data: any
  ) {}

  ngOnInit() {
    this.answerProfile = this.data && this.data.answerProfile;
    this.eula = this.data && this.data.eula;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
