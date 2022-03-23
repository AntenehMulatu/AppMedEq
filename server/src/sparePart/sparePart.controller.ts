import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SparePartService } from "./sparePart.service";
import { SparePartControllerBase } from "./base/sparePart.controller.base";

@swagger.ApiTags("spareParts")
@common.Controller("spareParts")
export class SparePartController extends SparePartControllerBase {
  constructor(
    protected readonly service: SparePartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
