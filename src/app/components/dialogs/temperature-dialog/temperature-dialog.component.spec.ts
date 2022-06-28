import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDialogComponent } from './temperature-dialog.component';

describe('TemperatureDialogComponent', () => {
  let component: TemperatureDialogComponent;
  let fixture: ComponentFixture<TemperatureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
