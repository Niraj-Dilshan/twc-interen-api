import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';

@Controller('contacts')
export class ContactController {
  @UseGuards(JwtGuard)
  @Get()
  getContacts() {
    return 'All contacts';
  }
}
