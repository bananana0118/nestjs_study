import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
//컨트롤러는 요청을 handling 하는 역할할
@Controller({ path: '' })
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get('port'));
    return this.configService.get('dbconfig.dev.type') || '';
  }
}
