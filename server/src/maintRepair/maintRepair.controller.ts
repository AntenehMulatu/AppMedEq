import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintRepairService } from "./maintRepair.service";
import { MaintRepairControllerBase } from "./base/maintRepair.controller.base";

@swagger.ApiTags("maintRepairs")
@common.Controller("maintRepairs")
export class MaintRepairController extends MaintRepairControllerBase {
  constructor(
    protected readonly service: MaintRepairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
