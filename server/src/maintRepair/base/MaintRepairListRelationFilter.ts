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
import { MaintRepairWhereInput } from "./MaintRepairWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MaintRepairListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MaintRepairWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintRepairWhereInput)
  @IsOptional()
  @Field(() => MaintRepairWhereInput, {
    nullable: true,
  })
  every?: MaintRepairWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintRepairWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintRepairWhereInput)
  @IsOptional()
  @Field(() => MaintRepairWhereInput, {
    nullable: true,
  })
  some?: MaintRepairWhereInput;

  @ApiProperty({
    required: false,
    type: () => MaintRepairWhereInput,
  })
  @ValidateNested()
  @Type(() => MaintRepairWhereInput)
  @IsOptional()
  @Field(() => MaintRepairWhereInput, {
    nullable: true,
  })
  none?: MaintRepairWhereInput;
}
export { MaintRepairListRelationFilter };
