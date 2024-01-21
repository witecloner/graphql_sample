import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../utils/create-user-input';
// import { UserSettingsMock } from 'src/__mocks__/user-setting.mock';
// import { UsersMock } from 'src/__mocks__/users.mock';
import { User } from '../models/user.model';
// import { Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSettingService } from './user-setting.service';

export const incId = 3;
@Resolver((of) => User)
export class UserResolver {
  // constructor(@Inject(UserService) private userService: UserService) {}
  constructor(
    private userService: UserService,
    private userServiceSetting: UserSettingService,
  ) {}

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    // return UsersMock.find((user) => user.id === id);
    return this.userService.getUserById(id);
  }
  // # Write your query or mutation here for GrapQL Playground
  // query {
  //   getUserById(id: 2){
  //     id
  //     username
  //     displayName
  //     settings {
  //       userId
  //       receiveEmails
  //     }
  //   }
  // }

  @Query(returns => [User])
  async getUsers() {
    // return UsersMock;
    return await this.userService.getUsers();
  }
  // # Write your query or mutation here for GrapQL Playground
  // query	{
  //   getUsers {
  //     id
  //     username
  //     displayName
  //     settings {
  //       userId
  //       receiveEmails
  //       receiveNotifications
  //     }
  //   }
  // }

  // @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  // getUserSettings(@Parent() user: User) {
  //   // console.log(user);
  //   // return UserSettingsMock.find((setting) => setting.userId === user.id);
  //   return this.userServiceSetting.getUserSettingById(user.id);
  // }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    // console.log(createUserData);
    // const { username, displayName } = createUserData;
    // const newUser = { username, displayName, id: ++incId };
    // UsersMock.push(newUser);
    // return newUser;
    return this.userService.createUser(createUserData);
  }
  // # Write your query or mutation here for GrapQL Playground
  // mutation {
  //   createUser(createUserData: {
  //     username: "clareen"
  //     displayName: "Clareen Wijaya"
  //   }) {
  //     id
  //     username
  //     displayName
  //   }
  // }
}
