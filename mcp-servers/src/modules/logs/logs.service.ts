import { Injectable } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LogsService {
  private getData() {
    const dataPath = path.join(process.cwd(), 'data', 'logs.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  searchLogs(query: string) {
    const logs = this.getData().logs;
    return logs.filter((log: any) => log.message.includes(query) || log.service.includes(query));
  }

  latestErrors() {
    const logs = this.getData().logs;
    return logs.filter((log: any) => log.level === 'ERROR' || log.level === 'FATAL');
  }

  getServiceLogs(serviceName: string) {
    const logs = this.getData().logs;
    return logs.filter((log: any) => log.service === serviceName);
  }
}
