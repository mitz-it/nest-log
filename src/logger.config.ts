import * as winston from 'winston';

export class LoggerConfig {
  static initialized: boolean = false;

  static init() {
    if (LoggerConfig.initialized) {
      throw Error('Logger: init already executed');
    }

    LoggerConfig.initialized = true;
    winston.addColors(this.getColors());
    winston.configure({
      exitOnError: false,
      levels: this.getLevels(),
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json(),
        winston.format.colorize({ all: true }),
      ),
      transports: new winston.transports.Console(),
    });
  }

  static getLevels() {
    return {
      fatal: 0,
      error: 1,
      warn: 2,
      verbose: 3,
      info: 4,
      debug: 5,
    };
  }

  static getColors() {
    return {
      fatal: 'redBG',
      error: 'red',
      warn: 'yellow',
      verbose: 'blueBG',
      info: 'green',
      debug: 'white',
    };
  }
}