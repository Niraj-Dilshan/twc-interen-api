import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}
  getContacts(userId: number) {
    return this.prisma.contact.findMany({
      where: {
        userId,
      },
    });
  }
  getContactById(userId: number, contactId: number) {
    return this.prisma.contact.findUnique({
      where: {
        id: contactId,
        userId,
      },
    });
  }
  async createContact(userId: number, dto: CreateContactDto) {
    const contact = await this.prisma.contact.create({
      data: {
        userId,
        ...dto,
      },
    });
    return contact;
  }
  async editContactById(
    userId: number,
    contactId: number,
    dto: UpdateContactDto,
  ) {
    // check if contact exists
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    // check if user owns the contact
    if (!contact || contact.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    return this.prisma.contact.update({
      where: {
        id: contactId,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteContactById(userId: number, contactId: number) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    // check if user owns the bookmark
    if (!contact || contact.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.contact.delete({
      where: {
        id: contactId,
      },
    });
  }
}
