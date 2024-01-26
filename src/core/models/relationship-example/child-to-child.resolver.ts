import { Resolver } from '@nestjs/graphql';
import { ChildToChildService } from './child-to-child.service';

@Resolver()
export class ChildToChildResolver {
  constructor(private childToChildServ: ChildToChildService) {}
}
