import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EquidevResolverBase } from "./base/equidev.resolver.base";
import { Equidev } from "./base/Equidev";
import { EquidevService } from "./equidev.service";

@graphql.Resolver(() => Equidev)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EquidevResolver extends EquidevResolverBase {
  constructor(
    protected readonly service: EquidevService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
