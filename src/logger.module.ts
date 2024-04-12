import { DynamicModule, Module } from '@nestjs/common';
import { Logger } from './logger.service';

@Module({})
export class LoggerModule {
  static register(): DynamicModule {
    return {
      module: LoggerModule,
      providers: [Logger],
      exports: [Logger],
    };
  }
}
