import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSettingsMock } from 'src/__mocks__/user-setting.mock';
import { UserSetting } from 'src/models/user-setting.model';
import { CreateUserSettingsInput } from 'src/utils/create-user-settings-input';

@Resolver()
export class UsersettingResolver {
  @Mutation(() => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    // const { userId, receiveNotifications, receiveEmails } =
    //   createUserSettingsData;
    // const newUserSettings = { userId, receiveNotifications, receiveEmails };
    // UserSettingsMock.push(newUserSettings);
    // return newUserSettings;

    console.log(createUserSettingsData);
    UserSettingsMock.push(createUserSettingsData);
    return createUserSettingsData;
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
