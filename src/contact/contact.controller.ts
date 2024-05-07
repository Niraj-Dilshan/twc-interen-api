import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('contacts')
export class ContactController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getContacts() {
    return 'All contacts';
  }
}
