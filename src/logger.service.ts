import { Injectable, LoggerService } from '@nestjs/common';
import { LoggerConfig } from './logger.config';
import * as winston from 'winston';

@Injectable()
export class Logger implements LoggerService {
  constructor() {
    LoggerConfig.init();
  }

  log(message: string) {
    winston.log('info', message);
  }

  error(message: string) {
    winston.log('error', message);
  }

  warn(message: string) {
    winston.log('warn', message);
  }

  debug(message: string) {
    winston.log('debug', message);
  }

  verbose(message: string) {
    winston.log('verbose', message);
  }

  fatal(message: string) {
    winston.log('fatal', message);
  }
}
