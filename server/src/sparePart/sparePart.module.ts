import { Module } from "@nestjs/common";
import { SparePartModuleBase } from "./base/sparePart.module.base";
import { SparePartService } from "./sparePart.service";
import { SparePartController } from "./sparePart.controller";
import { SparePartResolver } from "./sparePart.resolver";

@Module({
  imports: [SparePartModuleBase],
  controllers: [SparePartController],
  providers: [SparePartService, SparePartResolver],
  exports: [SparePartService],
})
export class SparePartModule {}
