import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { message: 'i have signin' };
  }

  signup() {
    return { message: 'i have signup' };
  }
}
