import { Injectable } from '@nitrostack/core';
import * as path from 'path';

@Injectable()
export class ConfigService {
  getDataDirectory(): string {
    return path.join(process.cwd(), 'data');
  }

  isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }
}
