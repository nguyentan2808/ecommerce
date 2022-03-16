import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world';
  }
}
