import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EquipmentSaleResolverBase } from "./base/equipmentSale.resolver.base";
import { EquipmentSale } from "./base/EquipmentSale";
import { EquipmentSaleService } from "./equipmentSale.service";

@graphql.Resolver(() => EquipmentSale)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EquipmentSaleResolver extends EquipmentSaleResolverBase {
  constructor(
    protected readonly service: EquipmentSaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
