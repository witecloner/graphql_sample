import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
// import { UserSettingResolver } from './users/user-setting.resolver';
// import { UserResolver } from './users/user.resolver';
// import { NavbarResolver } from './resolvers/navbar.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UserSetting } from './models/user-setting.model';
import { UsersModule } from './users/users.module';

// console.log(process.env.NODE_ENV === 'TEST');
//password: 'FY2CK_Fu@244ing',
//database: 'graphql_sample',

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'FY2CK_Fu@244ing',
      database:
        process.env.NODE_ENV === 'TEST'
          ? 'graphql_sample_test'
          : 'graphql_sample',
      entities: [User, UserSetting],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
  // providers: [UserResolver, UsersettingResolver, NavbarResolver],
})
export class AppModule {}
