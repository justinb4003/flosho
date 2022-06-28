import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleedingDialogComponent } from './bleeding-dialog.component';

describe('BleedingDialogComponent', () => {
  let component: BleedingDialogComponent;
  let fixture: ComponentFixture<BleedingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BleedingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BleedingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
