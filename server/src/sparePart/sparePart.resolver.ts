import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SparePartResolverBase } from "./base/sparePart.resolver.base";
import { SparePart } from "./base/SparePart";
import { SparePartService } from "./sparePart.service";

@graphql.Resolver(() => SparePart)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SparePartResolver extends SparePartResolverBase {
  constructor(
    protected readonly service: SparePartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
