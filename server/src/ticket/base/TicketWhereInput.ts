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
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EquidevWhereUniqueInput } from "../../equidev/base/EquidevWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskPlannerWhereUniqueInput } from "../../taskPlanner/base/TaskPlannerWhereUniqueInput";
import { EnumTicketTicketStatus } from "./EnumTicketTicketStatus";
@InputType()
class TicketWhereInput {
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
    type: () => EquidevWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EquidevWhereUniqueInput)
  @IsOptional()
  @Field(() => EquidevWhereUniqueInput, {
    nullable: true,
  })
  equipmentId?: EquidevWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isPrimeCustomer?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nameOfCustomer?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  nameOfEquipment?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  requisitionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  requisitionDetails?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  requisitionType?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TaskPlannerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskPlannerWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskPlannerWhereUniqueInput, {
    nullable: true,
  })
  taskPlanners?: TaskPlannerWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTicketTicketStatus,
  })
  @IsEnum(EnumTicketTicketStatus)
  @IsOptional()
  @Field(() => EnumTicketTicketStatus, {
    nullable: true,
  })
  ticketStatus?: "Done" | "Open" | "Closed";
}
export { TicketWhereInput };
