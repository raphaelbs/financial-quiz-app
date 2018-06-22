import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MatCardModule, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
export class EulaDialogMock {
  open() {
    return {
      afterClosed: () => of([false])
    };
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatCardModule],
      providers: [
        { provide: MatDialog, useClass: EulaDialogMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { eula: { label: 'label', eula: 'eula' } } }
          }
        },
        { provide: Router, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
