import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquipmentSaleCreateNestedManyWithoutEmployeesInput } from "./EquipmentSaleCreateNestedManyWithoutEmployeesInput";
import { InstallationCreateNestedManyWithoutEmployeesInput } from "./InstallationCreateNestedManyWithoutEmployeesInput";
import { MaintRepairCreateNestedManyWithoutEmployeesInput } from "./MaintRepairCreateNestedManyWithoutEmployeesInput";
import { TaskPlannerCreateNestedManyWithoutEmployeesInput } from "./TaskPlannerCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  employeeAge?: string | null;
  employeeDepartment: string;
  employeeEmail: string;
  employeeName?: string | null;
  employeePhone: number;
  employeePosition?: Array<"Ceo" | "Engineer" | "Technician" | "Sales">;
  equipmentSales?: EquipmentSaleCreateNestedManyWithoutEmployeesInput;
  installations?: InstallationCreateNestedManyWithoutEmployeesInput;
  maintRepairs?: MaintRepairCreateNestedManyWithoutEmployeesInput;
  taskPlanners?: TaskPlannerCreateNestedManyWithoutEmployeesInput;
};
