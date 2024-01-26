import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Child } from './child';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
  constructor(@InjectRepository(Child) private childRepo: Repository<Child>) {}
}
