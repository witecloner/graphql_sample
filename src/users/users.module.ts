import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/user.model';
import { UserSettingService } from './user-setting.service';
import { UserSetting } from '../models/user-setting.model';
import { UserSettingResolver } from './user-setting.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingResolver,
  ],
})
export class UsersModule {}
