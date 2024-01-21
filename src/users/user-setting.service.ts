import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from '../models/user-setting.model';
import { User } from '../models/user.model';
import { CreateUserSettingsInput } from '../utils/create-user-settings-input';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingRepository: Repository<UserSetting>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingData: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingData.userId,
    });

    if (!findUser) throw new Error('User Not Found');

    const newUserSetting = this.userSettingRepository.create(
      createUserSettingData,
    );

    const savedSetting = await this.userSettingRepository.save(newUserSetting);

    findUser.settings = savedSetting;

    await this.userRepository.save(findUser);

    return savedSetting;
  }
}
