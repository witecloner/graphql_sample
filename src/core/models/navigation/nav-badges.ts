import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nav_badges' })
@ObjectType()
export class NavBadges {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  color: string; // primary/accent/warn/hex color codes (#fff000)

  @Column()
  @Field()
  value: string; // display text
}
