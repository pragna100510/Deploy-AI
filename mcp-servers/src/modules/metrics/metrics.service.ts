import { Injectable } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MetricsService {
  private getData() {
    const dataPath = path.join(process.cwd(), 'data', 'metrics.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  getCpuUsage() {
    return this.getData().cpu;
  }

  getMemoryUsage() {
    return this.getData().memory;
  }

  getErrorRate() {
    return this.getData().errorRate;
  }

  getResponseTime() {
    return this.getData().responseTime;
  }
}
