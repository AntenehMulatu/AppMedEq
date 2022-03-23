import { Company } from "../company/Company";
import { Employee } from "../employee/Employee";
import { Equidev } from "../equidev/Equidev";

export type Installation = {
  commissionDate: Date | null;
  companyId?: Company;
  createdAt: Date;
  employeeId?: Array<Employee>;
  equipmentId?: Equidev | null;
  id: string;
  installationStartDate: Date;
  nameOfCompanyEqInstalled: string;
  nameOfTechnicalEngineerInstalled: string;
  updatedAt: Date;
};
