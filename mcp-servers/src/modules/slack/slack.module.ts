import { Module } from '@nitrostack/core';
import { SlackService } from './slack.service.js';
import { SlackTools } from './slack.tools.js';

@Module({
  name: 'slackmodule',
  controllers: [SlackTools],
  providers: [SlackService],
  exports: [SlackService],
})
export class SlackModule {}
