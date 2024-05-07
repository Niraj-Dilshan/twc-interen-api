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
  getContacts(@GetUser('id') userID: number) {
    return this.contactService.getContacts(userID);
  }
  @Get(':id')
  getContactById(
    @GetUser('id') userID: number,
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    return this.contactService.getContactById(userID, contactId);
  }
  @Post()
  createContact(@GetUser('id') userID: number, @Body() dto: CreateContactDto) {
    return this.contactService.createContact(userID, dto);
  }
  @Patch(':id')
  editContactById(
    @GetUser('id') userID: number,
    @Param('id', ParseIntPipe) contactId: number,
    @Body() dto: UpdateContactDto,
  ) {
    return this.contactService.editContactById(userID, contactId, dto);
  }
  @Delete(':id')
  deleteContactById(
    @GetUser('id') userID: number,
    @Param('id', ParseIntPipe) contactId: number,
  ) {
    return this.contactService.deleteContactById(userID, contactId);
  }
}
