/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Company } from "../../company/base/Company";
import { Employee } from "../../employee/base/Employee";
import { Equidev } from "../../equidev/base/Equidev";
@ObjectType()
class Installation {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  commissionDate!: Date | null;

  @ApiProperty({
    required: true,
    type: () => Company,
  })
  @ValidateNested()
  @Type(() => Company)
  companyId?: Company;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => [Employee],
  })
  @ValidateNested()
  @Type(() => Employee)
  @IsOptional()
  employeeId?: Array<Employee>;

  @ApiProperty({
    required: false,
    type: () => Equidev,
  })
  @ValidateNested()
  @Type(() => Equidev)
  @IsOptional()
  equipmentId?: Equidev | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  installationStartDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  nameOfCompanyEqInstalled!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  nameOfTechnicalEngineerInstalled!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Installation };
