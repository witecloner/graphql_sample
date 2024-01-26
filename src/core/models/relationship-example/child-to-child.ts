import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Child } from './child';

@Entity()
@ObjectType()
export class ChildToChild {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  childName: string; // Reference to child entity.

  // Many To Many Relation between Child-To-Child and Child.
  @ManyToOne(() => Child, (child) => child.childToChildest)
  @Field(() => Child)
  child: Child;
}
