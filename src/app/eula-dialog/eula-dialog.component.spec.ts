import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EulaDialogComponent } from './eula-dialog.component';

describe('EulaDialogComponent', () => {
  let component: EulaDialogComponent;
  let fixture: ComponentFixture<EulaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EulaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
