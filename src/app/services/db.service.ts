import { Dexie } from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {

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
