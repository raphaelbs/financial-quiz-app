import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EulaDialogComponent } from './eula-dialog.component';
import {
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

export class EulaDialogMock {
  close() {
    return {
      afterClosed: () => of([false])
    };
  }
}

describe('EulaDialogComponent', () => {
  let component: EulaDialogComponent;
  let fixture: ComponentFixture<EulaDialogComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EulaDialogComponent],
      imports: [
        MatDialogModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCheckboxModule,
        FormsModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: EulaDialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { eula: { label: 'label', eula: 'eula' } }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulaDialogComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('template should equals', () => {
    const title = debugElement.query(By.css('h2')).nativeElement.textContent;
    const eula = debugElement.query(By.css('mat-dialog-content')).nativeElement
      .textContent;
    expect(title).toEqual('label');
    expect(eula).toEqual('eula');
  });
});
