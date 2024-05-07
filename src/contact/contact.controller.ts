import {
  Controller,
  Get,
  UseGuards,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { ContactService } from './contact.service';
import { CreateContactDto, UpdateContactDto } from './dto';

@UseGuards(JwtGuard)
@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}
  @Get()
  getContacts(@GetUser('id') userId: number) {
    return this.contactService.getContacts(userId);
  }
  @Get(':id')
  getContactById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    return this.contactService.getContactById(userId, contactId);
  }
  @Post()
  createContact(@GetUser('id') userId: number, @Body() dto: CreateContactDto) {
    return this.contactService.createContact(userId, dto);
  }
  @Patch(':id')
  editContactById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) contactId: number,
    @Body() dto: UpdateContactDto,
  ) {
    return this.contactService.editContactById(userId, contactId, dto);
  }
  @Delete(':id')
  deleteContactById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    return this.contactService.deleteContactById(userId, contactId);
  }
}
