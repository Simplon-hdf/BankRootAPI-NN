import { Injectable } from '@nestjs/common';
import { UsersProvider } from '../../providers/users/users.provider';

@Injectable()
export class AuthService {
  constructor(private readonly usersProvider: UsersProvider) {}
  async login(email, password) {
    const user = await this.usersProvider.user({ mail: email });

    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }

    return JSON.stringify({
      code: 401,
      error: 'Identifiant invalide',
    });
  }
}
