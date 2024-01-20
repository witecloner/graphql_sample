import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Navbar {
  @Field()
  routeLink: string;

  @Field({ nullable: true })
  icon?: string;

  @Field({ nullable: true })
  label?: string;

  @Field({ nullable: true })
  expanded?: boolean;

  @Field(() => [Navbar])
  items?: Navbar[];
}
