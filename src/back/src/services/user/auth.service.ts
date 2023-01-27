import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(email, password) {
    return JSON.stringify({ mail : email, password: password});
  }
}
