import { Args, Query, Resolver } from '@nestjs/graphql';
import { NavbarsMock } from '../__mocks__/navbars.mock';
import { Navbar } from '../models/navbar.model';

@Resolver()
export class NavbarResolver {
  @Query(() => Navbar, { nullable: true })
  getNavbarByRouteLink(@Args('routeLink') routeLink: string) {
    return NavbarsMock.find((navbar) => navbar.routeLink === routeLink);
  }
  @Query(() => [Navbar])
  getNavbars() {
    return NavbarsMock;
  }
}
