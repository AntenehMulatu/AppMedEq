import { Company } from "../company/Company";
import { Employee } from "../employee/Employee";
import { Equidev } from "../equidev/Equidev";

export type MaintRepair = {
  actionTaken: string | null;
  companyId?: Company | null;
  createdAt: Date;
  dateOfCeoApproval: Date | null;
  employeeId?: Array<Employee>;
  equipmentId?: Equidev | null;
  faultType: string;
  id: string;
  lasttimeOfGoodOperation: Date | null;
  nameOfBmeApprovedMaintClearance: string | null;
  nameOfTechMaintainEq: string | null;
  possibleCause: string | null;
  updatedAt: Date;
};
