/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, TaskPlanner, Employee, Ticket } from "@prisma/client";

export class TaskPlannerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskPlannerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerFindManyArgs>
  ): Promise<number> {
    return this.prisma.taskPlanner.count(args);
  }

  async findMany<T extends Prisma.TaskPlannerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerFindManyArgs>
  ): Promise<TaskPlanner[]> {
    return this.prisma.taskPlanner.findMany(args);
  }
  async findOne<T extends Prisma.TaskPlannerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerFindUniqueArgs>
  ): Promise<TaskPlanner | null> {
    return this.prisma.taskPlanner.findUnique(args);
  }
  async create<T extends Prisma.TaskPlannerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerCreateArgs>
  ): Promise<TaskPlanner> {
    return this.prisma.taskPlanner.create<T>(args);
  }
  async update<T extends Prisma.TaskPlannerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerUpdateArgs>
  ): Promise<TaskPlanner> {
    return this.prisma.taskPlanner.update<T>(args);
  }
  async delete<T extends Prisma.TaskPlannerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskPlannerDeleteArgs>
  ): Promise<TaskPlanner> {
    return this.prisma.taskPlanner.delete(args);
  }

  async getEmployeeid(parentId: string): Promise<Employee | null> {
    return this.prisma.taskPlanner
      .findUnique({
        where: { id: parentId },
      })
      .employeeid();
  }

  async getTicketId(parentId: string): Promise<Ticket | null> {
    return this.prisma.taskPlanner
      .findUnique({
        where: { id: parentId },
      })
      .ticketId();
  }
}
