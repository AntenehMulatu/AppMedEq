import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstallationService } from "./installation.service";
import { InstallationControllerBase } from "./base/installation.controller.base";

@swagger.ApiTags("installations")
@common.Controller("installations")
export class InstallationController extends InstallationControllerBase {
  constructor(
    protected readonly service: InstallationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
