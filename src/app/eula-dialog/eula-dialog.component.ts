import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-eula-dialog',
  templateUrl: './eula-dialog.component.html',
  styleUrls: ['./eula-dialog.component.scss']
})
export class EulaDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EulaDialogComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
