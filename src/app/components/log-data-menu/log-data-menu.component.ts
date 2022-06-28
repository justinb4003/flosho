import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BleedingDialogComponent } from '../dialogs/bleeding-dialog/bleeding-dialog.component';
import { TemperatureDialogComponent } from '../dialogs/temperature-dialog/temperature-dialog.component';

@Component({
  selector: 'app-log-data-menu',
  templateUrl: './log-data-menu.component.html',
  styleUrls: ['./log-data-menu.component.scss']
})
export class LogDataMenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  public logBleeding(): void {
    console.log('present dialog now');
    const ref = this.dialog.open(BleedingDialogComponent, {
      width: '300px',
    });
  }
  
  public logTemperature(): void {
    console.log('present dialog now');
    const ref = this.dialog.open(TemperatureDialogComponent, {
      width: '300px',
    });
  }

}
