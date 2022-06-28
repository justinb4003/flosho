import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';
import { BleedingDialogComponent } from '../components/dialogs/bleeding-dialog/bleeding-dialog.component';

export interface Bleeding {
  date_key: number,
  level: string,
};

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  public bleeding!: Table<Bleeding, number>;

  constructor() {
    super('floshodb');
    this.version(1).stores({
      bleeding: 'date_key, level',
      temps: 'date_key, reading_C',
    });

    this.open()
      .then(() => console.log('Local IndexDB opened'))
      .catch((err) => console.error('Unable to open local db', err));
   }
}
