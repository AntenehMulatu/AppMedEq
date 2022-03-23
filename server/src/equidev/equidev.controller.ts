import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquidevService } from "./equidev.service";
import { EquidevControllerBase } from "./base/equidev.controller.base";

@swagger.ApiTags("equidevs")
@common.Controller("equidevs")
export class EquidevController extends EquidevControllerBase {
  constructor(
    protected readonly service: EquidevService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
