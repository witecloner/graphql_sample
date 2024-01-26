import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './child';
import { Parent } from './parent';
import { ParentService } from './parent.service';
import { ChildService } from './child.service';
import { ParentResolver } from './parent.resolver';
import { ChildResolver } from './child.resolver';
import { ChildToChild } from './child-to-child';
import { ChildToChildService } from './child-to-child.service';
import { ChildToChildResolver } from './child-to-child.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, Child, ChildToChild])],
  providers: [
    ParentService,
    ChildService,
    ParentResolver,
    ChildResolver,
    ChildToChildService,
    ChildToChildResolver,
  ],
})
export class OnetomanyModule {}
