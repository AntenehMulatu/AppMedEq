import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MaintRepairServiceBase } from "./base/maintRepair.service.base";

@Injectable()
export class MaintRepairService extends MaintRepairServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
