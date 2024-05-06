import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { message: 'i have signin' };
  }

  signup() {
    return { message: 'i have signup' };
  }
}
