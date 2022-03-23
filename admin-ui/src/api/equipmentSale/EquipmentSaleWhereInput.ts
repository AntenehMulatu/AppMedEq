import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { EquidevListRelationFilter } from "../equidev/EquidevListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EquipmentSaleWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  daysSoldtoCustomer?: DateTimeNullableFilter;
  employeeId?: EmployeeWhereUniqueInput;
  equipmentId?: EquidevListRelationFilter;
  id?: StringFilter;
  nameOfSalesPerson?: StringNullableFilter;
  valueOfTransaction?: FloatNullableFilter;
};
