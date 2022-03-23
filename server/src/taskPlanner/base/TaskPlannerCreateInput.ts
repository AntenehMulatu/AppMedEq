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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsDate,
  IsInt,
} from "class-validator";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTaskPlannerPriorityLevel } from "./EnumTaskPlannerPriorityLevel";
import { EnumTaskPlannerTaskStatus } from "./EnumTaskPlannerTaskStatus";
import { TicketWhereUniqueInput } from "../../ticket/base/TicketWhereUniqueInput";
@InputType()
class TaskPlannerCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  employeeAssigned?: string | null;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employeeid?: EmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumTaskPlannerPriorityLevel,
  })
  @IsEnum(EnumTaskPlannerPriorityLevel)
  @IsOptional()
  @Field(() => EnumTaskPlannerPriorityLevel, {
    nullable: true,
  })
  priorityLevel?: "High" | "Middium" | "Low" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  taskEndDate!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  taskStartDate!: Date;

  @ApiProperty({
    required: false,
    enum: EnumTaskPlannerTaskStatus,
  })
  @IsEnum(EnumTaskPlannerTaskStatus)
  @IsOptional()
  @Field(() => EnumTaskPlannerTaskStatus, {
    nullable: true,
  })
  taskStatus?: "Open" | "Done" | "Closed" | null;

  @ApiProperty({
    required: false,
    type: () => TicketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TicketWhereUniqueInput)
  @IsOptional()
  @Field(() => TicketWhereUniqueInput, {
    nullable: true,
  })
  ticketId?: TicketWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  ticketNumber!: number;
}
export { TaskPlannerCreateInput };
