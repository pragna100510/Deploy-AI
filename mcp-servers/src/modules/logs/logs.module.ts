import { Module } from '@nitrostack/core';
import { LogsService } from './logs.service.js';
import { LogsTools } from './logs.tools.js';

@Module({
  name: 'logsmodule',
  controllers: [LogsTools],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}
