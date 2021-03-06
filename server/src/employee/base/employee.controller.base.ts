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
import { EmployeeService } from "../employee.service";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { Employee } from "./Employee";
import { EquipmentSaleFindManyArgs } from "../../equipmentSale/base/EquipmentSaleFindManyArgs";
import { EquipmentSale } from "../../equipmentSale/base/EquipmentSale";
import { EquipmentSaleWhereUniqueInput } from "../../equipmentSale/base/EquipmentSaleWhereUniqueInput";
import { InstallationFindManyArgs } from "../../installation/base/InstallationFindManyArgs";
import { Installation } from "../../installation/base/Installation";
import { InstallationWhereUniqueInput } from "../../installation/base/InstallationWhereUniqueInput";
import { MaintRepairFindManyArgs } from "../../maintRepair/base/MaintRepairFindManyArgs";
import { MaintRepair } from "../../maintRepair/base/MaintRepair";
import { MaintRepairWhereUniqueInput } from "../../maintRepair/base/MaintRepairWhereUniqueInput";
import { TaskPlannerFindManyArgs } from "../../taskPlanner/base/TaskPlannerFindManyArgs";
import { TaskPlanner } from "../../taskPlanner/base/TaskPlanner";
import { TaskPlannerWhereUniqueInput } from "../../taskPlanner/base/TaskPlannerWhereUniqueInput";
@swagger.ApiBearerAuth()
export class EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Employee })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: EmployeeCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Employee> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Employee",
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
        `providing the properties: ${properties} on ${"Employee"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        companyId: data.companyId
          ? {
              connect: data.companyId,
            }
          : undefined,
      },
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        employeeAge: true,
        employeeDepartment: true,
        employeeEmail: true,
        employeeName: true,
        employeePhone: true,
        employeePosition: true,
        id: true,
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
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Employee] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(EmployeeFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Employee",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        employeeAge: true,
        employeeDepartment: true,
        employeeEmail: true,
        employeeName: true,
        employeePhone: true,
        employeePosition: true,
        id: true,
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
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: EmployeeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Employee | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Employee",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        employeeAge: true,
        employeeDepartment: true,
        employeeEmail: true,
        employeeName: true,
        employeePhone: true,
        employeePosition: true,
        id: true,
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
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body()
    data: EmployeeUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Employee | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
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
        `providing the properties: ${properties} on ${"Employee"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          companyId: data.companyId
            ? {
                connect: data.companyId,
              }
            : undefined,
        },
        select: {
          companyId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          employeeAge: true,
          employeeDepartment: true,
          employeeEmail: true,
          employeeName: true,
          employeePhone: true,
          employeePosition: true,
          id: true,
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
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          companyId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          employeeAge: true,
          employeeDepartment: true,
          employeeEmail: true,
          employeeName: true,
          employeePhone: true,
          employeePosition: true,
          id: true,
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
  @common.Get("/:id/equipmentSales")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(EquipmentSaleFindManyArgs)
  async findManyEquipmentSales(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EquipmentSale[]> {
    const query = plainToClass(EquipmentSaleFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EquipmentSale",
    });
    const results = await this.service.findEquipmentSales(params.id, {
      ...query,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        daysSoldtoCustomer: true,

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,
        nameOfSalesPerson: true,
        updatedAt: true,
        valueOfTransaction: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/equipmentSales")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async createEquipmentSales(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      equipmentSales: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/equipmentSales")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateEquipmentSales(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EquipmentSaleWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      equipmentSales: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/equipmentSales")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async deleteEquipmentSales(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      equipmentSales: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/installations")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(InstallationFindManyArgs)
  async findManyInstallations(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Installation[]> {
    const query = plainToClass(InstallationFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Installation",
    });
    const results = await this.service.findInstallations(params.id, {
      ...query,
      select: {
        commissionDate: true,

        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        equipmentId: {
          select: {
            id: true,
          },
        },

        id: true,
        installationStartDate: true,
        nameOfCompanyEqInstalled: true,
        nameOfTechnicalEngineerInstalled: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/installations")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async createInstallations(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      installations: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/installations")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateInstallations(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: InstallationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      installations: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/installations")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async deleteInstallations(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      installations: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/maintRepairs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(MaintRepairFindManyArgs)
  async findManyMaintRepairs(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<MaintRepair[]> {
    const query = plainToClass(MaintRepairFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MaintRepair",
    });
    const results = await this.service.findMaintRepairs(params.id, {
      ...query,
      select: {
        actionTaken: true,

        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateOfCeoApproval: true,

        equipmentId: {
          select: {
            id: true,
          },
        },

        faultType: true,
        id: true,
        lasttimeOfGoodOperation: true,
        nameOfBmeApprovedMaintClearance: true,
        nameOfTechMaintainEq: true,
        possibleCause: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/maintRepairs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async createMaintRepairs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      maintRepairs: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/maintRepairs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateMaintRepairs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: MaintRepairWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      maintRepairs: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/maintRepairs")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async deleteMaintRepairs(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      maintRepairs: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/taskPlanners")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(TaskPlannerFindManyArgs)
  async findManyTaskPlanners(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TaskPlanner[]> {
    const query = plainToClass(TaskPlannerFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TaskPlanner",
    });
    const results = await this.service.findTaskPlanners(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/taskPlanners")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async createTaskPlanners(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      taskPlanners: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/taskPlanners")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateTaskPlanners(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: TaskPlannerWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      taskPlanners: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/taskPlanners")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async deleteTaskPlanners(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      taskPlanners: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Employee"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
