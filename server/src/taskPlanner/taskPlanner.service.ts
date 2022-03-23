import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TaskPlannerServiceBase } from "./base/taskPlanner.service.base";

@Injectable()
export class TaskPlannerService extends TaskPlannerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
