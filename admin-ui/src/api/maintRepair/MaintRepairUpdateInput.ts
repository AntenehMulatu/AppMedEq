import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeUpdateManyWithoutMaintRepairsInput } from "./EmployeeUpdateManyWithoutMaintRepairsInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";

export type MaintRepairUpdateInput = {
  actionTaken?: string | null;
  companyId?: CompanyWhereUniqueInput | null;
  dateOfCeoApproval?: Date | null;
  employeeId?: EmployeeUpdateManyWithoutMaintRepairsInput;
  equipmentId?: EquidevWhereUniqueInput | null;
  faultType?: string;
  lasttimeOfGoodOperation?: Date | null;
  nameOfBmeApprovedMaintClearance?: string | null;
  nameOfTechMaintainEq?: string | null;
  possibleCause?: string | null;
};
