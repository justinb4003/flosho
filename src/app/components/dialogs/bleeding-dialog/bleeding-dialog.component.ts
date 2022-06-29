import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppDataService } from 'src/app/services/app-data.service';
import { Bleeding, DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-bleeding-dialog',
  templateUrl: './bleeding-dialog.component.html',
  styleUrls: ['./bleeding-dialog.component.scss']
})
export class BleedingDialogComponent implements OnInit {
  public bleedingLevel: string = '';

  constructor(
    private dbService: DbService,
    private appData: AppDataService,
    public dialogRef: MatDialogRef<BleedingDialogComponent>
  ) { }

  ngOnInit(): void {
    this.appData.loggingDateKey.subscribe((dk) => {
      this.dbService.getBleeding(dk).then((e) => {
        if (e) {
          this.bleedingLevel = e.level;
        }
      });
    });
  }

  public saveData(): void {
    console.log('save');
    const b = {
      date_key: this.appData.loggingDateKey.getValue(),
      level: this.bleedingLevel,
    } as Bleeding;
    console.log('saving bleeding:', b);
    this.dbService.updateBleeding(b)
      .then(() => {
        console.log('put finished');
        this.dialogRef.close();
    });
  }
}
