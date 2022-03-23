import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type MaintRepairWhereInput = {
  actionTaken?: StringNullableFilter;
  companyId?: CompanyWhereUniqueInput;
  dateOfCeoApproval?: DateTimeNullableFilter;
  employeeId?: EmployeeListRelationFilter;
  equipmentId?: EquidevWhereUniqueInput;
  faultType?: StringFilter;
  id?: StringFilter;
  lasttimeOfGoodOperation?: DateTimeNullableFilter;
  nameOfBmeApprovedMaintClearance?: StringNullableFilter;
  nameOfTechMaintainEq?: StringNullableFilter;
  possibleCause?: StringNullableFilter;
};
