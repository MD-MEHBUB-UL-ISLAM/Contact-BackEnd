import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  findOne(id: number): Promise<Contact> {
    return this.contactRepository.findOneBy({ id });
  }

  create(contact: Contact): Promise<Contact> {
    return this.contactRepository.save(contact);
  }

  async remove(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
}
