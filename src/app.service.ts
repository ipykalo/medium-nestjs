import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTags(): string[] {
    return ['putin xuy', 'putin zdohnr'];
  }
}
