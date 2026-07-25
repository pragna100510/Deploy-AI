import { Module } from '@nitrostack/core';
import { MetricsService } from './metrics.service.js';
import { MetricsTools } from './metrics.tools.js';

@Module({
  name: 'metricsmodule',
  controllers: [MetricsTools],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}
