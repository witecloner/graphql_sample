import { Field, ObjectType } from '@nestjs/graphql';
import { Child } from './child';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Parent {
  @PrimaryColumn({ unique: true })
  @Field()
  parentName: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  Refered?: string;

  // One To Many Relation between Parent and Child.
  // Describe: a parent may contains many child relation ship.
  @OneToMany(() => Child, (child) => child.parent)
  @Field(() => [Child])
  Childs?: Child[];
}
