import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InstallationServiceBase } from "./base/installation.service.base";

@Injectable()
export class InstallationService extends InstallationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
