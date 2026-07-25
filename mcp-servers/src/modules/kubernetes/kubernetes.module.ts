import { Module } from '@nitrostack/core';
import { KubernetesService } from './kubernetes.service.js';
import { KubernetesTools } from './kubernetes.tools.js';

@Module({
  name: 'kubernetesmodule',
  controllers: [KubernetesTools],
  providers: [KubernetesService],
  exports: [KubernetesService],
})
export class KubernetesModule {}
