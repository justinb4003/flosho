import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppDataService } from 'src/app/services/app-data.service';
import { DbService } from 'src/app/services/db.service';
import { BleedingDialogComponent } from '../dialogs/bleeding-dialog/bleeding-dialog.component';
import { TemperatureDialogComponent } from '../dialogs/temperature-dialog/temperature-dialog.component';

@Component({
  selector: 'app-log-data-menu',
  templateUrl: './log-data-menu.component.html',
  styleUrls: ['./log-data-menu.component.scss']
})
export class LogDataMenuComponent implements OnInit {

  public logDateKey: number;

  public bleedingLevel: string = '(no data logged)';
  public tempLevel: string = '(no data logged)';

  constructor(
    public dialog: MatDialog,
    public dbService: DbService,
    public appData: AppDataService,
  ) {
    this.logDateKey = this.appData._loggingDateKey;
  }

  ngOnInit(): void {
    this.appData.loggingDateKey.subscribe((newDate) => {
      this.logDateKey = newDate;
      this.refreshDisplay();
    });
    this.refreshDisplay();
  }

  public refreshDisplay(): void {
    console.log('hit the refresh');
    this.dbService.getBleeding(this.logDateKey).then((b) => {
      this.bleedingLevel = b?.level || '(no data logged)';
    });
  }

  public logBleeding(): void {
    console.log('present dialog now');
    const ref = this.dialog.open(BleedingDialogComponent, {
      width: '300px',
    });
    ref.afterClosed().subscribe(() => {
      this.refreshDisplay();
    });
  }
  
  public logTemperature(): void {
    console.log('present dialog now');
    const ref = this.dialog.open(TemperatureDialogComponent, {
      width: '300px',
    });
  }

}
