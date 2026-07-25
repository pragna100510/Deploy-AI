import { Module } from '@nitrostack/core';
import { ReportService } from './report.service.js';
import { ReportTools } from './report.tools.js';

@Module({
  name: 'reportmodule',
  controllers: [ReportTools],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}
