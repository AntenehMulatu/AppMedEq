import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type InstallationWhereInput = {
  commissionDate?: DateTimeNullableFilter;
  companyId?: CompanyWhereUniqueInput;
  employeeId?: EmployeeListRelationFilter;
  equipmentId?: EquidevWhereUniqueInput;
  id?: StringFilter;
  installationStartDate?: DateTimeFilter;
  nameOfCompanyEqInstalled?: StringFilter;
  nameOfTechnicalEngineerInstalled?: StringFilter;
};
