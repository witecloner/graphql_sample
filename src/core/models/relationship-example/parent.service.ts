import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './parent';
import { Repository } from 'typeorm';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent) private parentRepo: Repository<Parent>,
  ) {}
}
