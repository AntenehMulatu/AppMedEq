import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EquipmentSaleServiceBase } from "./base/equipmentSale.service.base";

@Injectable()
export class EquipmentSaleService extends EquipmentSaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
