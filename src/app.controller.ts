import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//컨트롤러는 요청을 handling 하는 역할할
@Controller({ path: "user" })
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("all")
  getHello(): string {
    return this.appService.getHello();
  }
}
