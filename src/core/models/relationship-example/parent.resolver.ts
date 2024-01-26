import { Resolver } from '@nestjs/graphql';
import { ParentService } from './parent.service';

@Resolver()
export class ParentResolver {
  constructor(private parentServ: ParentService) {}
}
