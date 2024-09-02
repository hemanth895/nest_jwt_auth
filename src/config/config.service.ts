import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

@Injectable()
export class ConfigService {
  get(key: string): string {
    return process.env[key];
  }
}
