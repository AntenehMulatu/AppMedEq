import { Module } from "@nestjs/common";
import { TaskPlannerModuleBase } from "./base/taskPlanner.module.base";
import { TaskPlannerService } from "./taskPlanner.service";
import { TaskPlannerController } from "./taskPlanner.controller";
import { TaskPlannerResolver } from "./taskPlanner.resolver";

@Module({
  imports: [TaskPlannerModuleBase],
  controllers: [TaskPlannerController],
  providers: [TaskPlannerService, TaskPlannerResolver],
  exports: [TaskPlannerService],
})
export class TaskPlannerModule {}
