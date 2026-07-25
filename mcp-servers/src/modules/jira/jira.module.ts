import { Module } from '@nitrostack/core';
import { JiraService } from './jira.service.js';
import { JiraTools } from './jira.tools.js';

@Module({
  name: 'jiramodule',
  controllers: [JiraTools],
  providers: [JiraService],
  exports: [JiraService],
})
export class JiraModule {}
