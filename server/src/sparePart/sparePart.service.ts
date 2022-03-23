import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SparePartServiceBase } from "./base/sparePart.service.base";

@Injectable()
export class SparePartService extends SparePartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
