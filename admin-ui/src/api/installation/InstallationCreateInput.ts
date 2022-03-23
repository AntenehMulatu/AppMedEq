import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutInstallationsInput } from "./EmployeeCreateNestedManyWithoutInstallationsInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";

export type InstallationCreateInput = {
  commissionDate?: Date | null;
  companyId: CompanyWhereUniqueInput;
  employeeId?: EmployeeCreateNestedManyWithoutInstallationsInput;
  equipmentId?: EquidevWhereUniqueInput | null;
  installationStartDate: Date;
  nameOfCompanyEqInstalled: string;
  nameOfTechnicalEngineerInstalled: string;
};
