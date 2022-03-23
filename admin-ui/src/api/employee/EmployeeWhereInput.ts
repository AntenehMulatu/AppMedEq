import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { EquipmentSaleListRelationFilter } from "../equipmentSale/EquipmentSaleListRelationFilter";
import { InstallationListRelationFilter } from "../installation/InstallationListRelationFilter";
import { MaintRepairListRelationFilter } from "../maintRepair/MaintRepairListRelationFilter";
import { TaskPlannerListRelationFilter } from "../taskPlanner/TaskPlannerListRelationFilter";

export type EmployeeWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  employeeAge?: StringNullableFilter;
  employeeDepartment?: StringFilter;
  employeeEmail?: StringFilter;
  employeeName?: StringNullableFilter;
  employeePhone?: IntFilter;
  equipmentSales?: EquipmentSaleListRelationFilter;
  id?: StringFilter;
  installations?: InstallationListRelationFilter;
  maintRepairs?: MaintRepairListRelationFilter;
  taskPlanners?: TaskPlannerListRelationFilter;
};
