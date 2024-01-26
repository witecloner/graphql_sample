import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildToChild } from './child-to-child';

@Injectable()
export class ChildToChildService {
  constructor(
    @InjectRepository(ChildToChild)
    private childToChildRepo: Repository<ChildToChild>,
  ) {}
}
