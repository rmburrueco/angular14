import { Injectable } from '@angular/core';

let seq = 1;
@Injectable({ providedIn: 'root' }) //quien lo pida, se lo das
export class LoggerService {
  id = 0;
  constructor() {
    this.id = seq++;
  }

  log(msg: unknown) {
    console.log(this.id + ' ' + msg);
  }
  error(msg: unknown) {
    console.error(msg);
  }
  warn(msg: unknown) {
    console.warn(msg);
  }
}
