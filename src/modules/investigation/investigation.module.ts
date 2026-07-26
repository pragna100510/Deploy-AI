import { Module } from '@nitrostack/core';
import { InvestigationService } from './investigation.service.js';
import { InvestigationTools } from './investigation.tools.js';
import { GithubModule } from '../github/github.module.js';
import { LogsModule } from '../logs/logs.module.js';
import { MetricsModule } from '../metrics/metrics.module.js';
import { KubernetesModule } from '../kubernetes/kubernetes.module.js';
import { JiraModule } from '../jira/jira.module.js';
import { SlackModule } from '../slack/slack.module.js';
import { ConfigModule } from '../config/config.module.js';

@Module({
  name: 'investigationmodule',
  imports: [
    GithubModule,
    LogsModule,
    MetricsModule,
    KubernetesModule,
    JiraModule,
    SlackModule,
    ConfigModule,
  ],
  controllers: [InvestigationTools],
  providers: [InvestigationService],
  exports: [InvestigationService],
})
export class InvestigationModule {}

