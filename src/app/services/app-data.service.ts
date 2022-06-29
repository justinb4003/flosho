import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public loggingDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  public loggingDateKey: BehaviorSubject<number> = new BehaviorSubject<number>(this.dateToKey(new Date()));

  public _loggingDate: Date;
  public _loggingDateKey: number;

  constructor() {
    this._loggingDate = this.loggingDate.getValue();
    this._loggingDateKey = this.dateToKey(this._loggingDate);
  }

  public dateToKey(indate: Date): number {
    return (
      indate.getFullYear() * 10000
      +
      indate.getMonth() * 100
      +
      indate.getDate()
    );
  }

  public dateToday(): void {
    this._loggingDate = new Date();
    this.loggingDate.next(this._loggingDate);
    this.loggingDateKey.next(this.dateToKey(this._loggingDate));
  }

  public dateForward(): void {
    this._loggingDate.setDate(this._loggingDate.getDate() + 1);
    this.loggingDate.next(this._loggingDate);
    this.loggingDateKey.next(this.dateToKey(this._loggingDate));
  }
  
  public dateBackward(): void {
    this._loggingDate.setDate(this._loggingDate.getDate() - 1);
    this.loggingDate.next(this._loggingDate);
    this.loggingDateKey.next(this.dateToKey(this._loggingDate));
  }
}
