/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { EmployeeUpdateManyWithoutInstallationsInput } from "./EmployeeUpdateManyWithoutInstallationsInput";
import { EquidevWhereUniqueInput } from "../../equidev/base/EquidevWhereUniqueInput";
@InputType()
class InstallationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  commissionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  companyId?: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeUpdateManyWithoutInstallationsInput,
  })
  @ValidateNested()
  @Type(() => EmployeeUpdateManyWithoutInstallationsInput)
  @IsOptional()
  @Field(() => EmployeeUpdateManyWithoutInstallationsInput, {
    nullable: true,
  })
  employeeId?: EmployeeUpdateManyWithoutInstallationsInput;

  @ApiProperty({
    required: false,
    type: () => EquidevWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EquidevWhereUniqueInput)
  @IsOptional()
  @Field(() => EquidevWhereUniqueInput, {
    nullable: true,
  })
  equipmentId?: EquidevWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  installationStartDate?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nameOfCompanyEqInstalled?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nameOfTechnicalEngineerInstalled?: string;
}
export { InstallationUpdateInput };
