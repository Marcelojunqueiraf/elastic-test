import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/for')
  forGrande(): string {
    return this.appService.forGrande();
  }

  @Get('/invert')
  invert(): number[][] {
    return this.appService.invert();
  }
}
