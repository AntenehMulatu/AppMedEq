import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutMaintRepairsInput } from "./EmployeeCreateNestedManyWithoutMaintRepairsInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";

export type MaintRepairCreateInput = {
  actionTaken?: string | null;
  companyId?: CompanyWhereUniqueInput | null;
  dateOfCeoApproval?: Date | null;
  employeeId?: EmployeeCreateNestedManyWithoutMaintRepairsInput;
  equipmentId?: EquidevWhereUniqueInput | null;
  faultType: string;
  lasttimeOfGoodOperation?: Date | null;
  nameOfBmeApprovedMaintClearance?: string | null;
  nameOfTechMaintainEq?: string | null;
  possibleCause?: string | null;
};
