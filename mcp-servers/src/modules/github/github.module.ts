import { Module } from '@nitrostack/core';
import { GithubService } from './github.service.js';
import { GithubTools } from './github.tools.js';

@Module({
  name: 'githubmodule',
  controllers: [GithubTools],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
