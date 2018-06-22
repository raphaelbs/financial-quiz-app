import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EulaDialogComponent } from '../eula-dialog/eula-dialog.component';
import { IEula } from '../eula-dialog/eula.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eula: IEula;
  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eula = this.route.snapshot.data['eula'];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EulaDialogComponent, {
      data: this.eula
    });

    dialogRef.afterClosed().subscribe(result => {});
  }
}
