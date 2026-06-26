import { Controller, Get } from '@nestjs/common';

@Controller('/auth')
export class UserAuthController {
  @Get('/sign-in')
  test(): string {
    return 'User Auth';
  }
}
