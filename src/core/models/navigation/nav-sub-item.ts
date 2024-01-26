import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { NavItem } from './nav-item';

@Entity({ name: 'nav_sub_item' })
@ObjectType()
export class NavSubItem {
  @PrimaryColumn({ unique: true })
  @Field()
  name: string; // display text

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  state?: string; // router state

  @Column({ nullable: true })
  @Field({ nullable: true })
  icon?: string; //material icon name

  @Column({ nullable: true })
  @Field({ nullable: true })
  svgIcon?: string; //ui lib icon name

  @Column({ default: false })
  @Field({ nullable: true, defaultValue: false })
  expanded?: boolean; // If true, item is expanded.

  // @OneToMany(() => NavSubItem, (items) => items.parent)
  // @JoinTable()
  // @Field({ nullable: true })
  // items?: NavSubItem[];

  // @ManyToOne(() => NavItem, (parent) => parent.subItems)
  // @Field(() => NavItem, { nullable: true })
  // parent?: NavItem;
  @ManyToOne(() => NavItem, (navitem) => navitem.items)
  @Field(() => NavItem)
  item: NavItem;
}
