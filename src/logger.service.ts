import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class Logger implements LoggerService {
  log(message: string) {
    console.log(JSON.stringify({ level: 'info', message }));
  }

  error(message: string) {
    console.error(JSON.stringify({ level: 'error', message }));
  }

  warn(message: string) {
    console.warn(JSON.stringify({ level: 'warn', message }));
  }

  debug(message: string) {
    console.debug(JSON.stringify({ level: 'debug', message }));
  }

  verbose(message: string) {
    console.log(JSON.stringify({ level: 'verbose', message }));
  }
}
