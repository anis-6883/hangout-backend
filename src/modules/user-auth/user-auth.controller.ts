import { Body, Controller, Post } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserAuthService } from './user-auth.service';

@Controller('/auth')
export class UserAuthController {
  constructor(private readonly authService: UserAuthService) {}

  @Post('/register')
  async register(@Body() userRegisterDto: UserRegisterDto) {
    const user = await this.authService.register(userRegisterDto);

    return {
      message: 'User registered successfully',
      data: user,
    };
  }
}
