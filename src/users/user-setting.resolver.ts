import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/user-setting.model';
import { CreateUserSettingsInput } from '../utils/create-user-settings-input';
import { UserSettingService } from './user-setting.service';

@Resolver()
export class UserSettingResolver {
  constructor(private userSettingService: UserSettingService) {}

  @Mutation(() => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    // const { userId, receiveNotifications, receiveEmails } =
    //   createUserSettingsData;
    // const newUserSettings = { userId, receiveNotifications, receiveEmails };
    // UserSettingsMock.push(newUserSettings);
    // return newUserSettings;

    // console.log(createUserSettingsData);
    // UserSettingsMock.push(createUserSettingsData);
    // return createUserSettingsData;
    const userSetting = await this.userSettingService.createUserSettings(
      createUserSettingsData,
    );
    return userSetting;
  }
  // # Write your query or mutation here for GrapQL Playground
  // mutation {
  //   createUserSettings(createUserSettingsData: {
  //     userId: 4,
  //     receiveEmails: true,
  //     receiveNotifications: true,
  //   }) {
  //     userId
  //     receiveEmails
  //     receiveNotifications
  //   }
  // }
}
