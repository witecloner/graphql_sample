import { Resolver } from '@nestjs/graphql';
import { ChildService } from './child.service';

@Resolver()
export class ChildResolver {
  constructor(private childServ: ChildService) {}
}
