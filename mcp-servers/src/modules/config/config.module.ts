import { Module } from '@nitrostack/core';
import { ConfigService } from './config.service.js';

@Module({
  name: 'configmodule',
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
