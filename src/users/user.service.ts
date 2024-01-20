import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { CreateUserInput } from 'src/utils/create-user-input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }

  getUserById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.usersRepository.create(  createUserData);
    return this.usersRepository.save(newUser);
  }
}
