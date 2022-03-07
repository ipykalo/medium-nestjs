import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTags(): string[] {
    return ['hi'];
  }
}
