import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IEula } from './eula.interface';

@Component({
  selector: 'app-eula-dialog',
  templateUrl: './eula-dialog.component.html',
  styleUrls: ['./eula-dialog.component.scss']
})
export class EulaDialogComponent implements OnInit {
  eulaAccepted: boolean;

  constructor(
    public dialogRef: MatDialogRef<EulaDialogComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: IEula
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
