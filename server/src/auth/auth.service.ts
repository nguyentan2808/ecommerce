import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const isVerify = await argon2.verify(user.password, pass);
      if (isVerify) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
