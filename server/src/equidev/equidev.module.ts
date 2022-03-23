import { Module } from "@nestjs/common";
import { EquidevModuleBase } from "./base/equidev.module.base";
import { EquidevService } from "./equidev.service";
import { EquidevController } from "./equidev.controller";
import { EquidevResolver } from "./equidev.resolver";

@Module({
  imports: [EquidevModuleBase],
  controllers: [EquidevController],
  providers: [EquidevService, EquidevResolver],
  exports: [EquidevService],
})
export class EquidevModule {}
