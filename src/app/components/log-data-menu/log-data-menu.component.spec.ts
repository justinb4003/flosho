import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDataMenuComponent } from './log-data-menu.component';

describe('LogDataMenuComponent', () => {
  let component: LogDataMenuComponent;
  let fixture: ComponentFixture<LogDataMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogDataMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
