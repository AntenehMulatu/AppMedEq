/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { SparePartWhereUniqueInput } from "./SparePartWhereUniqueInput";
import { SparePartUpdateInput } from "./SparePartUpdateInput";

@ArgsType()
class UpdateSparePartArgs {
  @Field(() => SparePartWhereUniqueInput, { nullable: false })
  where!: SparePartWhereUniqueInput;
  @Field(() => SparePartUpdateInput, { nullable: false })
  data!: SparePartUpdateInput;
}

export { UpdateSparePartArgs };
