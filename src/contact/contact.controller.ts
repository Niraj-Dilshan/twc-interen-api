import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactController {
  @Get()
  getContacts() {
    return 'All contacts';
  }
}
