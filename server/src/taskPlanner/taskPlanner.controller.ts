import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaskPlannerService } from "./taskPlanner.service";
import { TaskPlannerControllerBase } from "./base/taskPlanner.controller.base";

@swagger.ApiTags("taskPlanners")
@common.Controller("taskPlanners")
export class TaskPlannerController extends TaskPlannerControllerBase {
  constructor(
    protected readonly service: TaskPlannerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
