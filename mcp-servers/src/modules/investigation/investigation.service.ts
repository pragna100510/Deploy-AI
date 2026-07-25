import { Injectable } from '@nitrostack/core';
import { GithubService } from '../github/github.service.js';
import { LogsService } from '../logs/logs.service.js';
import { MetricsService } from '../metrics/metrics.service.js';
import { KubernetesService } from '../kubernetes/kubernetes.service.js';
import { JiraService } from '../jira/jira.service.js';
import { SlackService } from '../slack/slack.service.js';

@Injectable()
export class InvestigationService {
  constructor(
    private readonly githubService: GithubService,
    private readonly logsService: LogsService,
    private readonly metricsService: MetricsService,
    private readonly kubernetesService: KubernetesService,
    private readonly jiraService: JiraService,
    private readonly slackService: SlackService,
  ) {}

  async investigateIncident(incidentId: string) {
    // 1. Gather Evidence
    const k8sStatus = this.kubernetesService.getPodStatus('auth-service-7f8b9c4d-x2y3z');
    const logs = this.logsService.latestErrors();
    const metrics = this.metricsService.getErrorRate();
    const commits = this.githubService.getRecentCommits();

    // 2. Correlate & Determine Root Cause (Mock logic)
    const rootCause = 'Recent commit introduced a database connection issue causing CrashLoopBackOff.';

    // 3. Notify Slack
    this.slackService.sendIncidentAlert('#incidents', `Investigating ${incidentId}: ${rootCause}`);

    // 4. Update Jira
    this.jiraService.createIncidentTicket(`Incident ${incidentId}`, rootCause, 'SEV-1');

    return {
      incidentId,
      status: 'Investigation Complete',
      evidence: {
        k8sStatus,
        logs,
        metrics,
        commits,
      },
      rootCause,
      recommendations: [
        'Rollback recent commit',
        'Check database connection string'
      ]
    };
  }
}
