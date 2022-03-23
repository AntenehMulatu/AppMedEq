import { Module } from "@nestjs/common";
import { MaintRepairModuleBase } from "./base/maintRepair.module.base";
import { MaintRepairService } from "./maintRepair.service";
import { MaintRepairController } from "./maintRepair.controller";
import { MaintRepairResolver } from "./maintRepair.resolver";

@Module({
  imports: [MaintRepairModuleBase],
  controllers: [MaintRepairController],
  providers: [MaintRepairService, MaintRepairResolver],
  exports: [MaintRepairService],
})
export class MaintRepairModule {}
