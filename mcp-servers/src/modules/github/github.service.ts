import { Injectable } from '@nitrostack/core';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GithubService {
  private getData() {
    const dataPath = path.join(process.cwd(), 'data', 'github.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  getRecentCommits() {
    return this.getData().commits;
  }

  getCommitDetails(hash: string) {
    const commits = this.getData().commits;
    return commits.find((c: any) => c.hash === hash) || null;
  }

  getChangedFiles() {
    return this.getData().changedFiles;
  }
}
