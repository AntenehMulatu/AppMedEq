import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MaintRepairResolverBase } from "./base/maintRepair.resolver.base";
import { MaintRepair } from "./base/MaintRepair";
import { MaintRepairService } from "./maintRepair.service";

@graphql.Resolver(() => MaintRepair)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MaintRepairResolver extends MaintRepairResolverBase {
  constructor(
    protected readonly service: MaintRepairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
