/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CompanyType, Company } from "@prisma/client";

export class CompanyTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CompanyTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.companyType.count(args);
  }

  async findMany<T extends Prisma.CompanyTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeFindManyArgs>
  ): Promise<CompanyType[]> {
    return this.prisma.companyType.findMany(args);
  }
  async findOne<T extends Prisma.CompanyTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeFindUniqueArgs>
  ): Promise<CompanyType | null> {
    return this.prisma.companyType.findUnique(args);
  }
  async create<T extends Prisma.CompanyTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeCreateArgs>
  ): Promise<CompanyType> {
    return this.prisma.companyType.create<T>(args);
  }
  async update<T extends Prisma.CompanyTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeUpdateArgs>
  ): Promise<CompanyType> {
    return this.prisma.companyType.update<T>(args);
  }
  async delete<T extends Prisma.CompanyTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CompanyTypeDeleteArgs>
  ): Promise<CompanyType> {
    return this.prisma.companyType.delete(args);
  }

  async findCompanies(
    parentId: string,
    args: Prisma.CompanyFindManyArgs
  ): Promise<Company[]> {
    return this.prisma.companyType
      .findUnique({
        where: { id: parentId },
      })
      .companies(args);
  }

  async findCompanyTypes(
    parentId: string,
    args: Prisma.CompanyTypeFindManyArgs
  ): Promise<CompanyType[]> {
    return this.prisma.companyType
      .findUnique({
        where: { id: parentId },
      })
      .companyTypes(args);
  }

  async getCompanyType(parentId: string): Promise<CompanyType | null> {
    return this.prisma.companyType
      .findUnique({
        where: { id: parentId },
      })
      .companyType();
  }
}
