import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquipmentSaleUpdateManyWithoutEmployeesInput } from "./EquipmentSaleUpdateManyWithoutEmployeesInput";
import { InstallationUpdateManyWithoutEmployeesInput } from "./InstallationUpdateManyWithoutEmployeesInput";
import { MaintRepairUpdateManyWithoutEmployeesInput } from "./MaintRepairUpdateManyWithoutEmployeesInput";
import { TaskPlannerUpdateManyWithoutEmployeesInput } from "./TaskPlannerUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  employeeAge?: string | null;
  employeeDepartment?: string;
  employeeEmail?: string;
  employeeName?: string | null;
  employeePhone?: number;
  employeePosition?: Array<"Ceo" | "Engineer" | "Technician" | "Sales">;
  equipmentSales?: EquipmentSaleUpdateManyWithoutEmployeesInput;
  installations?: InstallationUpdateManyWithoutEmployeesInput;
  maintRepairs?: MaintRepairUpdateManyWithoutEmployeesInput;
  taskPlanners?: TaskPlannerUpdateManyWithoutEmployeesInput;
};
