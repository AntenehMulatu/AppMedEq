import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeUpdateManyWithoutInstallationsInput } from "./EmployeeUpdateManyWithoutInstallationsInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";

export type InstallationUpdateInput = {
  commissionDate?: Date | null;
  companyId?: CompanyWhereUniqueInput;
  employeeId?: EmployeeUpdateManyWithoutInstallationsInput;
  equipmentId?: EquidevWhereUniqueInput | null;
  installationStartDate?: Date;
  nameOfCompanyEqInstalled?: string;
  nameOfTechnicalEngineerInstalled?: string;
};
