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
import { TaskPlannerWhereInput } from "./TaskPlannerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TaskPlannerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TaskPlannerWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskPlannerWhereInput)
  @IsOptional()
  @Field(() => TaskPlannerWhereInput, {
    nullable: true,
  })
  every?: TaskPlannerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskPlannerWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskPlannerWhereInput)
  @IsOptional()
  @Field(() => TaskPlannerWhereInput, {
    nullable: true,
  })
  some?: TaskPlannerWhereInput;

  @ApiProperty({
    required: false,
    type: () => TaskPlannerWhereInput,
  })
  @ValidateNested()
  @Type(() => TaskPlannerWhereInput)
  @IsOptional()
  @Field(() => TaskPlannerWhereInput, {
    nullable: true,
  })
  none?: TaskPlannerWhereInput;
}
export { TaskPlannerListRelationFilter };
