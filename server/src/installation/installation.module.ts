import { Module } from "@nestjs/common";
import { InstallationModuleBase } from "./base/installation.module.base";
import { InstallationService } from "./installation.service";
import { InstallationController } from "./installation.controller";
import { InstallationResolver } from "./installation.resolver";

@Module({
  imports: [InstallationModuleBase],
  controllers: [InstallationController],
  providers: [InstallationService, InstallationResolver],
  exports: [InstallationService],
})
export class InstallationModule {}
