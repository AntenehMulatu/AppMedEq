/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EquidevWhereUniqueInput } from "../../equidev/base/EquidevWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class EquidevCreateNestedManyWithoutEquipmentSalesInput {
  @Field(() => [EquidevWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EquidevWhereUniqueInput],
  })
  connect?: Array<EquidevWhereUniqueInput>;
}
export { EquidevCreateNestedManyWithoutEquipmentSalesInput };
