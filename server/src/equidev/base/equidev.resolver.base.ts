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
import { CreateEquidevArgs } from "./CreateEquidevArgs";
import { UpdateEquidevArgs } from "./UpdateEquidevArgs";
import { DeleteEquidevArgs } from "./DeleteEquidevArgs";
import { EquidevFindManyArgs } from "./EquidevFindManyArgs";
import { EquidevFindUniqueArgs } from "./EquidevFindUniqueArgs";
import { Equidev } from "./Equidev";
import { MaintRepairFindManyArgs } from "../../maintRepair/base/MaintRepairFindManyArgs";
import { MaintRepair } from "../../maintRepair/base/MaintRepair";
import { SparePartFindManyArgs } from "../../sparePart/base/SparePartFindManyArgs";
import { SparePart } from "../../sparePart/base/SparePart";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { Company } from "../../company/base/Company";
import { EquipmentSale } from "../../equipmentSale/base/EquipmentSale";
import { Installation } from "../../installation/base/Installation";
import { EquidevService } from "../equidev.service";

@graphql.Resolver(() => Equidev)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EquidevResolverBase {
  constructor(
    protected readonly service: EquidevService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async _equidevsMeta(
    @graphql.Args() args: EquidevFindManyArgs
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

  @graphql.Query(() => [Equidev])
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async equidevs(
    @graphql.Args() args: EquidevFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Equidev[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Equidev",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Equidev, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "own",
  })
  async equidev(
    @graphql.Args() args: EquidevFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Equidev | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Equidev",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Equidev)
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "create",
    possession: "any",
  })
  async createEquidev(
    @graphql.Args() args: CreateEquidevArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Equidev> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Equidev",
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
        `providing the properties: ${properties} on ${"Equidev"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        companyId: args.data.companyId
          ? {
              connect: args.data.companyId,
            }
          : undefined,

        equipmentSales: args.data.equipmentSales
          ? {
              connect: args.data.equipmentSales,
            }
          : undefined,

        installations: args.data.installations
          ? {
              connect: args.data.installations,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Equidev)
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "update",
    possession: "any",
  })
  async updateEquidev(
    @graphql.Args() args: UpdateEquidevArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Equidev | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Equidev",
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
        `providing the properties: ${properties} on ${"Equidev"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          companyId: args.data.companyId
            ? {
                connect: args.data.companyId,
              }
            : undefined,

          equipmentSales: args.data.equipmentSales
            ? {
                connect: args.data.equipmentSales,
              }
            : undefined,

          installations: args.data.installations
            ? {
                connect: args.data.installations,
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

  @graphql.Mutation(() => Equidev)
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "delete",
    possession: "any",
  })
  async deleteEquidev(
    @graphql.Args() args: DeleteEquidevArgs
  ): Promise<Equidev | null> {
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

  @graphql.ResolveField(() => [MaintRepair])
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async maintRepairs(
    @graphql.Parent() parent: Equidev,
    @graphql.Args() args: MaintRepairFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<MaintRepair[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "MaintRepair",
    });
    const results = await this.service.findMaintRepairs(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [SparePart])
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async spareParts(
    @graphql.Parent() parent: Equidev,
    @graphql.Args() args: SparePartFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<SparePart[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "SparePart",
    });
    const results = await this.service.findSpareParts(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Ticket])
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async tickets(
    @graphql.Parent() parent: Equidev,
    @graphql.Args() args: TicketFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ticket[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ticket",
    });
    const results = await this.service.findTickets(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Company, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async companyId(
    @graphql.Parent() parent: Equidev,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Company | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Company",
    });
    const result = await this.service.getCompanyId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => EquipmentSale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async equipmentSales(
    @graphql.Parent() parent: Equidev,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EquipmentSale | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EquipmentSale",
    });
    const result = await this.service.getEquipmentSales(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Installation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Equidev",
    action: "read",
    possession: "any",
  })
  async installations(
    @graphql.Parent() parent: Equidev,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Installation | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Installation",
    });
    const result = await this.service.getInstallations(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
