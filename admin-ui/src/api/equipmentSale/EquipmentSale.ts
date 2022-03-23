import { Company } from "../company/Company";
import { Employee } from "../employee/Employee";
import { Equidev } from "../equidev/Equidev";

export type EquipmentSale = {
  companyId?: Company | null;
  createdAt: Date;
  daysSoldtoCustomer: Date | null;
  employeeId?: Employee | null;
  equipmentId?: Array<Equidev>;
  id: string;
  nameOfSalesPerson: string | null;
  updatedAt: Date;
  valueOfTransaction: number | null;
};
