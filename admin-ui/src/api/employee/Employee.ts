import { Company } from "../company/Company";
import { EquipmentSale } from "../equipmentSale/EquipmentSale";
import { Installation } from "../installation/Installation";
import { MaintRepair } from "../maintRepair/MaintRepair";
import { TaskPlanner } from "../taskPlanner/TaskPlanner";

export type Employee = {
  companyId?: Company | null;
  createdAt: Date;
  employeeAge: string | null;
  employeeDepartment: string;
  employeeEmail: string;
  employeeName: string | null;
  employeePhone: number;
  employeePosition?: Array<"Ceo" | "Engineer" | "Technician" | "Sales">;
  equipmentSales?: Array<EquipmentSale>;
  id: string;
  installations?: Array<Installation>;
  maintRepairs?: Array<MaintRepair>;
  taskPlanners?: Array<TaskPlanner>;
  updatedAt: Date;
};
