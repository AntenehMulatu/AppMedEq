import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EquidevServiceBase } from "./base/equidev.service.base";

@Injectable()
export class EquidevService extends EquidevServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
