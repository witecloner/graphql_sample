import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Parent } from './parent';
import { ChildToChild } from './child-to-child';

@Entity()
@ObjectType()
export class Child {
  @PrimaryColumn({ unique: true })
  @Field()
  childName: string;

  @Column()
  @Field()
  value: string;

  // One To Many Relation between Child and Parent.
  @ManyToOne(() => Parent, (parent) => parent.Childs)
  @Field(() => Parent)
  parent: Parent;

  // @ManyToMany(() => Child)
  // @JoinTable()
  // @Field(() => [Child])
  // childest: Child[];

  // Many To Many Relation between Child and Child-To-Child
  @OneToMany(() => ChildToChild, (childToChild) => childToChild.child)
  @Field(() => ChildToChild)
  childToChildest: ChildToChild[];
}
