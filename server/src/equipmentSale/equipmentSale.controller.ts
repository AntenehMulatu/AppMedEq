import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EquipmentSaleService } from "./equipmentSale.service";
import { EquipmentSaleControllerBase } from "./base/equipmentSale.controller.base";

@swagger.ApiTags("equipmentSales")
@common.Controller("equipmentSales")
export class EquipmentSaleController extends EquipmentSaleControllerBase {
  constructor(
    protected readonly service: EquipmentSaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
