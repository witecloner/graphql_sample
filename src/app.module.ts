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
import { NavigationModule } from './core/models/navigation/navigation.module';
import { NavBadges } from './core/models/navigation/nav-badges';
import { NavSubItem } from './core/models/navigation/nav-sub-item';
import { NavItem } from './core/models/navigation/nav-item';
import { Child } from './core/models/relationship-example/child';
import { OnetomanyModule } from './core/models/relationship-example/onetomany.module';
import { Parent } from './core/models/relationship-example/parent';
import { ChildToChild } from './core/models/relationship-example/child-to-child';
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
      entities: [
        User,
        UserSetting,
        NavItem,
        NavSubItem,
        NavBadges,
        Parent,
        Child,
        ChildToChild,
      ],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    NavigationModule,
    OnetomanyModule,
  ],
  controllers: [],
  providers: [],
  // providers: [UserResolver, UsersettingResolver, NavbarResolver],
})
export class AppModule {}
