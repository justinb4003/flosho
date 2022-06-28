import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<BleedingDialogComponent>
  ) { }

  ngOnInit(): void {
    var doc = this.dbService.bleeding.get(20220601).then((doc) => {
      console.log(doc);
      this.bleedingLevel = doc?.level!;
    });
  }

  public saveData(): void {
    console.log('save');
    this.dbService.bleeding.put({
      date_key: 20220601,
      level: this.bleedingLevel,
    }).then(() => {
      console.log('put finished');
      this.dialogRef.close();
    });
  }
}
