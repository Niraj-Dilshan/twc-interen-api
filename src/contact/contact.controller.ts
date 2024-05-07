import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('contacts')
export class ContactController {
  @Get()
  getContacts(@GetUser('id') userID: number) {
    return userID;
  }
}
