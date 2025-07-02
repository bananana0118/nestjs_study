import { Injectable } from '@nestjs/common';
//비즈니스 로직
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
