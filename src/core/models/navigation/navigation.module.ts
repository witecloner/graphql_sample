import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NavBadges } from './nav-badges';
import { NavSubItem } from './nav-sub-item';
import { NavItem } from './nav-item';

@Module({
  imports: [TypeOrmModule.forFeature([NavBadges, NavSubItem, NavItem])],
  // providers: [],
})
export class NavigationModule {}
