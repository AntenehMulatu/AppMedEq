/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TaskPlannerWhereUniqueInput } from "../../taskPlanner/base/TaskPlannerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TaskPlannerUpdateManyWithoutEmployeesInput {
  @Field(() => [TaskPlannerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPlannerWhereUniqueInput],
  })
  connect?: Array<TaskPlannerWhereUniqueInput>;

  @Field(() => [TaskPlannerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPlannerWhereUniqueInput],
  })
  disconnect?: Array<TaskPlannerWhereUniqueInput>;

  @Field(() => [TaskPlannerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPlannerWhereUniqueInput],
  })
  set?: Array<TaskPlannerWhereUniqueInput>;
}
export { TaskPlannerUpdateManyWithoutEmployeesInput };
