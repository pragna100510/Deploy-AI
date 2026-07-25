import { Injectable } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class KubernetesService {
  private getData() {
    const dataPath = path.join(process.cwd(), 'data', 'kubernetes.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  getPodStatus(podName: string) {
    const pods = this.getData().pods;
    return pods.find((p: any) => p.name === podName) || null;
  }

  getDeploymentStatus(deploymentName: string) {
    const deployments = this.getData().deployments;
    return deployments.find((d: any) => d.name === deploymentName) || null;
  }

  getRestartCount(podName: string) {
    const pod = this.getPodStatus(podName);
    return pod ? pod.restarts : null;
  }
}
