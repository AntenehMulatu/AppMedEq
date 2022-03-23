import { Module } from "@nestjs/common";
import { EquipmentSaleModuleBase } from "./base/equipmentSale.module.base";
import { EquipmentSaleService } from "./equipmentSale.service";
import { EquipmentSaleController } from "./equipmentSale.controller";
import { EquipmentSaleResolver } from "./equipmentSale.resolver";

@Module({
  imports: [EquipmentSaleModuleBase],
  controllers: [EquipmentSaleController],
  providers: [EquipmentSaleService, EquipmentSaleResolver],
  exports: [EquipmentSaleService],
})
export class EquipmentSaleModule {}
