import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { message: 'i have signin' };
  }

  async signup(dto: AuthUserDto) {
    const hashedPassword = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    return user;
  }
}
