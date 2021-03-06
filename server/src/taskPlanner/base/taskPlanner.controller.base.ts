/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TaskPlannerService } from "../taskPlanner.service";
import { TaskPlannerCreateInput } from "./TaskPlannerCreateInput";
import { TaskPlannerWhereInput } from "./TaskPlannerWhereInput";
import { TaskPlannerWhereUniqueInput } from "./TaskPlannerWhereUniqueInput";
import { TaskPlannerFindManyArgs } from "./TaskPlannerFindManyArgs";
import { TaskPlannerUpdateInput } from "./TaskPlannerUpdateInput";
import { TaskPlanner } from "./TaskPlanner";
@swagger.ApiBearerAuth()
export class TaskPlannerControllerBase {
  constructor(
    protected readonly service: TaskPlannerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: TaskPlanner })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TaskPlannerCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TaskPlanner",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"TaskPlanner"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        employeeid: data.employeeid
          ? {
              connect: data.employeeid,
            }
          : undefined,

        ticketId: data.ticketId
          ? {
              connect: data.ticketId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        employeeAssigned: true,

        employeeid: {
          select: {
            id: true,
          },
        },

        id: true,
        priorityLevel: true,
        taskEndDate: true,
        taskStartDate: true,
        taskStatus: true,

        ticketId: {
          select: {
            id: true,
          },
        },

        ticketNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [TaskPlanner] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TaskPlannerFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner[]> {
    const args = plainToClass(TaskPlannerFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TaskPlanner",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        employeeAssigned: true,

        employeeid: {
          select: {
            id: true,
          },
        },

        id: true,
        priorityLevel: true,
        taskEndDate: true,
        taskStartDate: true,
        taskStatus: true,

        ticketId: {
          select: {
            id: true,
          },
        },

        ticketNumber: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: TaskPlanner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TaskPlannerWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TaskPlanner",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        employeeAssigned: true,

        employeeid: {
          select: {
            id: true,
          },
        },

        id: true,
        priorityLevel: true,
        taskEndDate: true,
        taskStartDate: true,
        taskStatus: true,

        ticketId: {
          select: {
            id: true,
          },
        },

        ticketNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TaskPlanner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TaskPlannerWhereUniqueInput,
    @common.Body()
    data: TaskPlannerUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TaskPlanner",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"TaskPlanner"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          employeeid: data.employeeid
            ? {
                connect: data.employeeid,
              }
            : undefined,

          ticketId: data.ticketId
            ? {
                connect: data.ticketId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          employeeAssigned: true,

          employeeid: {
            select: {
              id: true,
            },
          },

          id: true,
          priorityLevel: true,
          taskEndDate: true,
          taskStartDate: true,
          taskStatus: true,

          ticketId: {
            select: {
              id: true,
            },
          },

          ticketNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "TaskPlanner",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TaskPlanner })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TaskPlannerWhereUniqueInput
  ): Promise<TaskPlanner | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          employeeAssigned: true,

          employeeid: {
            select: {
              id: true,
            },
          },

          id: true,
          priorityLevel: true,
          taskEndDate: true,
          taskStartDate: true,
          taskStatus: true,

          ticketId: {
            select: {
              id: true,
            },
          },

          ticketNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
