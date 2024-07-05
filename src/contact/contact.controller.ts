import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Contact> {
    return this.contactService.findOne(id);
  }

  @Post()
  create(@Body() contact: Contact): Promise<Contact> {
    return this.contactService.create(contact);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.contactService.remove(id);
  }
}
