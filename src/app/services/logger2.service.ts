import { Injectable } from '@angular/core';
/** JSDoc
 * LoggerV2 with timestamp
 */
@Injectable()
export class Logger2Service {
  log(msg: unknown) {
    const t0 = new Date().toISOString();
    const payload = `${t0} INFO: ${msg}`;
    console.log(payload);
  }
  error(msg: unknown) {
    const t0 = new Date().toISOString();
    const payload = `${t0} ERROR: ${msg}`;
    console.error(payload);
  }
  warn(msg: unknown) {
    const t0 = new Date().toISOString();
    const payload = `${t0} WARN: ${msg}`;
    console.warn(payload);
  }
}
