import { AuthService } from './auth/auth.service';
import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private AuthService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.AuthService.login(req.user);
  }
}
