/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTaskPlannerArgs } from "./CreateTaskPlannerArgs";
import { UpdateTaskPlannerArgs } from "./UpdateTaskPlannerArgs";
import { DeleteTaskPlannerArgs } from "./DeleteTaskPlannerArgs";
import { TaskPlannerFindManyArgs } from "./TaskPlannerFindManyArgs";
import { TaskPlannerFindUniqueArgs } from "./TaskPlannerFindUniqueArgs";
import { TaskPlanner } from "./TaskPlanner";
import { Employee } from "../../employee/base/Employee";
import { Ticket } from "../../ticket/base/Ticket";
import { TaskPlannerService } from "../taskPlanner.service";

@graphql.Resolver(() => TaskPlanner)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TaskPlannerResolverBase {
  constructor(
    protected readonly service: TaskPlannerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "any",
  })
  async _taskPlannersMeta(
    @graphql.Args() args: TaskPlannerFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [TaskPlanner])
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "any",
  })
  async taskPlanners(
    @graphql.Args() args: TaskPlannerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TaskPlanner",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => TaskPlanner, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "own",
  })
  async taskPlanner(
    @graphql.Args() args: TaskPlannerFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TaskPlanner",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => TaskPlanner)
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "create",
    possession: "any",
  })
  async createTaskPlanner(
    @graphql.Args() args: CreateTaskPlannerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TaskPlanner",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TaskPlanner"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        employeeid: args.data.employeeid
          ? {
              connect: args.data.employeeid,
            }
          : undefined,

        ticketId: args.data.ticketId
          ? {
              connect: args.data.ticketId,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => TaskPlanner)
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "update",
    possession: "any",
  })
  async updateTaskPlanner(
    @graphql.Args() args: UpdateTaskPlannerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TaskPlanner",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"TaskPlanner"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          employeeid: args.data.employeeid
            ? {
                connect: args.data.employeeid,
              }
            : undefined,

          ticketId: args.data.ticketId
            ? {
                connect: args.data.ticketId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TaskPlanner)
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "delete",
    possession: "any",
  })
  async deleteTaskPlanner(
    @graphql.Args() args: DeleteTaskPlannerArgs
  ): Promise<TaskPlanner | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Employee, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "any",
  })
  async employeeid(
    @graphql.Parent() parent: TaskPlanner,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Employee",
    });
    const result = await this.service.getEmployeeid(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Ticket, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "any",
  })
  async ticketId(
    @graphql.Parent() parent: TaskPlanner,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ticket | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ticket",
    });
    const result = await this.service.getTicketId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
