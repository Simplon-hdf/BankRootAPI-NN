import { Injectable } from '@nestjs/common';
import { UsersProvider } from '../users/users.provider';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersProvider: UsersProvider,
    private jwtService: JwtService,
  ) {}
  async validateUser(email, password) {
    const user = await this.usersProvider.user({ mail: email });
    console.log(user);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }

    return JSON.stringify({
      code: 401,
      error: 'Identifiant invalide',
    });
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
