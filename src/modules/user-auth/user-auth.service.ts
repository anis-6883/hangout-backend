import { ConflictException, Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';

@Injectable()
export class UserAuthService {
  async register(userRegisterDto: UserRegisterDto) {
    if (1 == 1) {
      throw new ConflictException('User already exists');
    }

    const user = {
      name: 'Anis',
    };

    return user;
  }
}
