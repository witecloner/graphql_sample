import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from 'src/models/user-setting.model';
import { CreateUserSettingsInput } from 'src/utils/create-user-settings-input';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingRepository: Repository<UserSetting>,
  ) {}

  createUserSettings(createUserSettingData: CreateUserSettingsInput) {
    const newUserSetting = this.userSettingRepository.create(
      createUserSettingData,
    );
    this.userSettingRepository.save(newUserSetting);
  }
}
