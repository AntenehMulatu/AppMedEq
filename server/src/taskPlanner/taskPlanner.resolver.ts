import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TaskPlannerResolverBase } from "./base/taskPlanner.resolver.base";
import { TaskPlanner } from "./base/TaskPlanner";
import { TaskPlannerService } from "./taskPlanner.service";

@graphql.Resolver(() => TaskPlanner)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TaskPlannerResolver extends TaskPlannerResolverBase {
  constructor(
    protected readonly service: TaskPlannerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
