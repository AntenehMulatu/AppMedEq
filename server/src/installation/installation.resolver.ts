import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InstallationResolverBase } from "./base/installation.resolver.base";
import { Installation } from "./base/Installation";
import { InstallationService } from "./installation.service";

@graphql.Resolver(() => Installation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InstallationResolver extends InstallationResolverBase {
  constructor(
    protected readonly service: InstallationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
