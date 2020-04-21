import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated components',
        date: new Date('12/26/2020 12:54:23'),
      },
      {
        id: '2',
        text: 'Added logs as a func',
        date: new Date('12/26/2020 13:44:14'),
      },
      {
        id: '3',
        text: 'Added dynamic logs',
        date: new Date('12/26/2020 14:34:52'),
      },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
