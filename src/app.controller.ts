import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request:Request): string {
    return 'ciao ' + request.query.b;/* this.appService.getHello() */;
  }
}
