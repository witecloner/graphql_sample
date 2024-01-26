import { Field, ObjectType } from '@nestjs/graphql';
import { NavBadges } from './nav-badges';
import { NavSubItem } from './nav-sub-item';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

export type NavItemType =
  | 'link'
  | 'dropdown'
  | 'icon'
  | 'separator'
  | 'extLink';

@Entity({ name: 'nav_item' })
@ObjectType()
export class NavItem {
  @PrimaryColumn({ unique: true })
  @Field()
  name: string; //used as display text for item and title for separator type

  @Column({
    type: 'enum',
    enum: ['link', 'dropdown', 'icon', 'separator', 'extLink'],
    default: 'link',
  })
  @Field()
  type: NavItemType; //'link' | 'dropdown' | 'icon' | 'separator' | 'extLink';

  @Column({ nullable: true })
  @Field({ nullable: true })
  state?: string; //router state

  @Column({ nullable: true })
  @Field({ nullable: true })
  icon?: string; // Material icon name

  @Column({ nullable: true })
  @Field({ nullable: true })
  svgIcon?: string; // UI Lib icon name

  @Column({ nullable: true })
  @Field({ nullable: true })
  tooltip?: string; // Tooltip text

  @Column({ default: false })
  @Field({ nullable: true, defaultValue: false })
  disabled?: boolean; // If true, item will not be appeared in sidenav.

  @Column({ default: false })
  @Field({ nullable: true, defaultValue: false })
  expanded?: boolean; // if true, item is expanded.

  // @OneToMany(() => NavSubItem, (subItem) => subItem.parent)
  // @Field({ nullable: true })
  // subItems?: NavSubItem[]; // Dropdown items

  @OneToMany(() => NavSubItem, (navsubitem) => navsubitem.item)
  @Field(() => [NavSubItem], { nullable: true })
  items?: NavSubItem[];

  @OneToOne(() => NavBadges)
  @JoinColumn()
  @Field(() => NavBadges, { nullable: true })
  badges?: NavBadges[];
}
